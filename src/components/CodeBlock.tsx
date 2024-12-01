// src/components/CodeBlock/CodeBlock.tsx
import { Highlight } from "prism-react-renderer";
// import themes from "prism-react-renderer/dist/index";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({
  code,
  language = "typescript",
  showLineNumbers = true,
}: CodeBlockProps) => {
  return (
    <Highlight
      // theme={themes.themes.nightOwl}
      code={code.trim()}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className="overflow-x-auto rounded-lg p-4 bg-[#011627]">
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              className="table-row"
            >
              {showLineNumbers && (
                <span className="table-cell text-right pr-4 select-none opacity-50 text-white">
                  {i + 1}
                </span>
              )}
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;