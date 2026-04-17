const fs = require('fs');
const path = require('path');

const ROOT = 'e:/WEB-DEVELOPMENT/Projects/portfolio';

// ── STEP 1: Create destination directories ──────────────────────
['components/sections', 'components/ui', 'components/ui/corners'].forEach(d => {
  fs.mkdirSync(path.join(ROOT, d), { recursive: true });
});
console.log('[1/4] Created directories');

// ── STEP 2: Move files ──────────────────────────────────────────
const moves = {
  // Page sections → sections/
  'components/AboutMe.tsx':          'components/sections/AboutMe.tsx',
  'components/Education.tsx':        'components/sections/Education.tsx',
  'components/Experience.tsx':       'components/sections/Experience.tsx',
  'components/Footer.tsx':           'components/sections/Footer.tsx',
  'components/Hero1.tsx':            'components/sections/Hero1.tsx',
  'components/Hero2.tsx':            'components/sections/Hero2.tsx',
  'components/Navbar.tsx':           'components/sections/Navbar.tsx',
  'components/Projects.tsx':         'components/sections/Projects.tsx',
  'components/TechnologyStack.tsx':  'components/sections/TechnologyStack.tsx',
  'components/Widgets.tsx':          'components/sections/Widgets.tsx',
  'components/crafts.tsx':           'components/sections/crafts.tsx',

  // UI primitives → ui/
  'components/Dither.tsx':              'components/ui/Dither.tsx',
  'components/MacCodeBlock.tsx':        'components/ui/MacCodeBlock.tsx',
  'components/StripGridHorizontal.tsx': 'components/ui/StripGridHorizontal.tsx',
  'components/StripGridVertical.tsx':   'components/ui/StripGridVertical.tsx',
  'components/ToolTip.tsx':             'components/ui/ToolTip.tsx',
  'components/VideoOverlay.tsx':        'components/ui/VideoOverlay.tsx',

  // LazyCraft → crafts/
  'components/LazyCraft.tsx': 'components/crafts/LazyCraft.tsx',
};

for (const [src, dest] of Object.entries(moves)) {
  const from = path.join(ROOT, src);
  const to   = path.join(ROOT, dest);
  if (fs.existsSync(from)) {
    fs.renameSync(from, to);
    console.log('  moved ' + src + ' -> ' + dest);
  }
}

// Move ui_components/* → ui/
const uiCompDir = path.join(ROOT, 'components/ui_components');
if (fs.existsSync(uiCompDir)) {
  for (const f of fs.readdirSync(uiCompDir)) {
    fs.renameSync(path.join(uiCompDir, f), path.join(ROOT, 'components/ui', f));
    console.log('  moved ui_components/' + f + ' -> ui/' + f);
  }
  fs.rmSync(uiCompDir, { recursive: true });
}

// Move Lcorner/* → ui/corners/
const lcornerDir = path.join(ROOT, 'components/Lcorner');
if (fs.existsSync(lcornerDir)) {
  for (const f of fs.readdirSync(lcornerDir)) {
    fs.renameSync(path.join(lcornerDir, f), path.join(ROOT, 'components/ui/corners', f));
    console.log('  moved Lcorner/' + f + ' -> ui/corners/' + f);
  }
  fs.rmSync(lcornerDir, { recursive: true });
}

console.log('[2/4] Moved all files');

// ── STEP 3: Collect all .ts/.tsx files to update imports ────────
function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f === 'node_modules' || f === '.next' || f === '.git') continue;
      results = results.concat(walk(full));
    } else if (f.endsWith('.ts') || f.endsWith('.tsx')) {
      results.push(full);
    }
  }
  return results;
}

const allFiles = walk(ROOT);
console.log('[3/4] Found ' + allFiles.length + ' source files to scan');

// ── STEP 4: Replace import paths ────────────────────────────────
// Absolute path replacements (@/ style)
const absoluteReplacements = [
  // Sections
  ['@/components/AboutMe',         '@/components/sections/AboutMe'],
  ['@/components/Education',       '@/components/sections/Education'],
  ['@/components/Experience',      '@/components/sections/Experience'],
  ['@/components/Footer',          '@/components/sections/Footer'],
  ['@/components/Hero1',           '@/components/sections/Hero1'],
  ['@/components/Hero2',           '@/components/sections/Hero2'],
  ['@/components/Navbar',          '@/components/sections/Navbar'],
  ['@/components/Projects',        '@/components/sections/Projects'],
  ['@/components/TechnologyStack', '@/components/sections/TechnologyStack'],
  ['@/components/Widgets',         '@/components/sections/Widgets'],
  // UI
  ['@/components/Dither',              '@/components/ui/Dither'],
  ['@/components/MacCodeBlock',        '@/components/ui/MacCodeBlock'],
  ['@/components/StripGridHorizontal', '@/components/ui/StripGridHorizontal'],
  ['@/components/StripGridVertical',   '@/components/ui/StripGridVertical'],
  ['@/components/ToolTip',             '@/components/ui/ToolTip'],
  ['@/components/VideoOverlay',        '@/components/ui/VideoOverlay'],
  ['@/components/LazyCraft',           '@/components/crafts/LazyCraft'],
  // Folders
  ['@/components/ui_components/',  '@/components/ui/'],
  ['@/components/Lcorner/',        '@/components/ui/corners/'],
];

// Relative path replacements (used inside components/ files)
const relativeReplacements = [
  // from sections files referencing siblings that were also in root
  ['./ui_components/',   '@/components/ui/'],
  ['./Icons/',           '@/components/Icons/'],
  ['./Transition/',      '@/components/Transition/'],
  ['./LazyCraft',        '@/components/crafts/LazyCraft'],
  ['./Lcorner/',         '@/components/ui/corners/'],
  ['./ToolTip',          '@/components/ui/ToolTip'],
  ['./StripGridHorizontal', '@/components/ui/StripGridHorizontal'],
  ['./StripGridVertical',   '@/components/ui/StripGridVertical'],
  // from crafts/ files referencing parent folders
  ['../ui_components/',  '@/components/ui/'],
  ['../Icons/',          '@/components/Icons/'],
  // from blogs/ files referencing parent folders
  ['../ui_components/',  '@/components/ui/'],
];

// Special: crafts.tsx import of crafts/ subfolder items needs updating
// Old: from "./crafts/card-menu"  (was components/crafts/card-menu when file was in components/)
// New: file is in components/sections/crafts.tsx so it needs "../crafts/card-menu" or absolute
const sectionsCraftsReplacements = [
  ['./crafts/',  '@/components/crafts/'],
];

let totalChanges = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Apply absolute replacements - only within import strings
  for (const [from, to] of absoluteReplacements) {
    // Match inside quotes, being careful about word boundaries
    content = content.replaceAll('"' + from + '"', '"' + to + '"');
    content = content.replaceAll("'" + from + "'", "'" + to + "'");
    // Also handle paths that continue (like @/components/ui_components/Button)
    if (from.endsWith('/')) {
      content = content.replaceAll('"' + from, '"' + to);
      content = content.replaceAll("'" + from, "'" + to);
    }
  }

  // Apply relative replacements only to files that were (or are) in components/
  const normFile = file.replace(/\\/g, '/');
  if (normFile.includes('/components/')) {
    for (const [from, to] of relativeReplacements) {
      content = content.replaceAll('"' + from, '"' + to);
      content = content.replaceAll("'" + from, "'" + to);
    }
  }

  // Special handling for sections/crafts.tsx
  if (normFile.endsWith('/components/sections/crafts.tsx')) {
    for (const [from, to] of sectionsCraftsReplacements) {
      content = content.replaceAll('"' + from, '"' + to);
      content = content.replaceAll("'" + from, "'" + to);
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalChanges++;
  }
}

// Handle the special case: @/components/crafts" needs to become @/components/sections/crafts"
// But ONLY when it's an import of the crafts COMPONENT, not the crafts/ folder
// The crafts component import looks like: import Crafts from "@/components/crafts"
for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Only match exact end-of-string imports (not @/components/crafts/something)
  content = content.replace(/from\s+["']@\/components\/crafts["']/g, 'from "@/components/sections/crafts"');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalChanges++;
  }
}

console.log('[4/4] Updated imports in ' + totalChanges + ' files');
console.log('DONE!');
