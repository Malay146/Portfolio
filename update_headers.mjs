import fs from 'fs';

const files = [
  'e:/WEB-DEVELOPMENT/Projects/portfolio/app/crafts/page.tsx',
  'e:/WEB-DEVELOPMENT/Projects/portfolio/app/blogs/page.tsx',
  'e:/WEB-DEVELOPMENT/Projects/portfolio/app/blogs/nextjs-page-transition-gsap/BlogClient.tsx',
  'e:/WEB-DEVELOPMENT/Projects/portfolio/app/blogs/my-portfolio-case-study/BlogClient.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Insert import
  const importStatement = `import { DashedHeader, DashedLineContainer } from "@/components/ui_components/dashed-containers";\n`;
  if (!content.includes('DashedHeader')) {
    const lines = content.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) lastImportIdx = i;
    }
    if (lastImportIdx !== -1) {
       lines.splice(lastImportIdx + 1, 0, importStatement);
       content = lines.join('\n');
    }
  }

  // Remove TopLeft and BottomRight imports
  content = content.replace(/import BottomRight from "[^"]+";\n/g, '');
  content = content.replace(/import TopLeft from "[^"]+";\n/g, '');

  // 1. the single header container with border-y (16px/22px) -> sometimes has {text} instead of pure text
  const regex1 = /<div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white\/30[^"]*">\s*<h2 className="font-roboto-mono font-bold tracking-tighter text-\[16px\] md:text-\[22px\] px-2 border-x border-dashed border-white\/30 relative hover:bg-white\/10 transition-all duration-100 cursor-default">\s*([\s\S]*?)<TopLeft \/>\s*<BottomRight \/>\s*<\/h2>\s*<\/div>/g;
  content = content.replace(regex1, (match, text) => {
      return `<DashedLineContainer>\n          <DashedHeader className="text-[16px] md:text-[22px]">\n            ${text.trim()}\n          </DashedHeader>\n        </DashedLineContainer>`;
  });

  // 2. the single header container with border-y (18px/24px)
  const regex2 = /<div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white\/30[^"]*">\s*<h2 className="font-roboto-mono font-bold tracking-tighter text-\[18px\] md:text-\[24px\] px-2 border-x border-dashed border-white\/30 relative hover:bg-white\/10 transition-all duration-100 cursor-default">\s*([\s\S]*?)<TopLeft \/>\s*<BottomRight \/>\s*<\/h2>\s*<\/div>/g;
  content = content.replace(regex2, (match, text) => {
      return `<DashedLineContainer>\n          <DashedHeader>\n            ${text.trim()}\n          </DashedHeader>\n        </DashedLineContainer>`;
  });
  
  // 3. For crafts page multiple headers
  const regex3 = /<div className="text-white flex justify-between items-center px-4 md:px-16 border-y border-dashed border-white\/30">\s*<h2 className="font-roboto-mono font-bold tracking-tighter text-\[14px\] md:text-\[20px\] px-2 border-x border-dashed border-white\/30 relative hover:bg-white\/10 transition-all duration-100 cursor-default">\s*([\s\S]*?)<TopLeft \/>\s*<BottomRight \/>\s*<\/h2>\s*<h2 className="font-roboto-mono tracking-tighter text-\[14px\] md:text-\[20px\] px-2 border-x border-dashed border-white\/30 relative hover:bg-white\/10 transition-all duration-100 cursor-default">\s*([\s\S]*?)<TopLeft \/>\s*<BottomRight \/>\s*<\/h2>\s*<\/div>/g;
  content = content.replace(regex3, (match, t1, t2) => {
      return `<DashedLineContainer>\n              <DashedHeader className="text-[14px] md:text-[20px]">\n                ${t1.trim()}\n              </DashedHeader>\n\n              <DashedHeader className="font-normal text-[14px] md:text-[20px]">\n                ${t2.trim()}\n              </DashedHeader>\n            </DashedLineContainer>`;
  });

  fs.writeFileSync(file, content);
});
console.log('done');
