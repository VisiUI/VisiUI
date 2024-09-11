import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeWindowProps {
  code: string;
  language: string;
  className?: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({
  code,
  language,
  className = "max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-4",
}) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        className="mt-2 rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
      </div>
    </div>
  );
};

CodeWindow.defaultProps = {
  language: "javascript", 
};

export default CodeWindow;
