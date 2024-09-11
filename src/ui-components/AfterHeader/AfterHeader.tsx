import React from "react";
import CodeWindow from "../CodeWindow/CodeWindow";

const LayoutComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-white">
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
        <div className="lg:w-1/2 space-y-4"> 
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-6xl font-bold mobile-large:text-3xl">
              Customizable
            </span>{" "}
          <h1 className="text-6xl font-bold mobile-large:text-3xl">
            Make Code <span className="bg-gradient-to-r from-teal-400 to-blue-800 text-transparent bg-clip-text ">Better</span>
          </h1>
          <h1 className="text-6xl font-bold mobile-large:text-3xl">
            Make Code <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Faster</span>
          </h1>
          <h1 className="text-6xl font-bold mobile-large:text-3xl">
            Make Code <span className="bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text">Easiest</span>
          </h1>
          <h1 className="text-6xl font-bold mobile-large:text-3xl">
            Make Code <span className="bg-gradient-to-r from-red-500 to-blue-900 text-transparent bg-clip-text">Modern</span>
          </h1>
        </div>

        {/* CodeWindow */}
        <div className="lg:w-1/2">
          <CodeWindow
            code={`import React from "react";
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
`}
            language="tsx"
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
