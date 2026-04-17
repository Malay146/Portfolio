import React from "react";
import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  innerClassName?: string;
  code: string;
  language?: string;
};

export function MacCodeBlock({ className, innerClassName, code, language = "ts"}: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={cn(
        "max-w-3xl rounded-xl overflow-hidden bg-zinc-900 border border-white/10 shadow-lg",
        className
      )}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-white/10">
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-red-500" />
          <span className="size-3 rounded-full bg-yellow-400" />
          <span className="size-3 rounded-full bg-green-500" />
        </div>

        <div className="flex items-center gap-3 text-xs text-white/60">
          <span className="uppercase">{language}</span>
          <button
            onClick={copy}
            className="px-2 py-1 rounded-md border border-white/10 bg-zinc-900 hover:bg-zinc-700 transition"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
      </div>

      {/* Code */}
      <Highlight theme={themes.vsDark} code={code} language={language as any}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn("p-4 text-[8px] md:text-[12px] overflow-x-auto", innerClassName)}
            style={style}
          >
            {tokens.map((line, i) => {
                return(
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            )})}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
