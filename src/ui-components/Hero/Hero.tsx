import Link from "next/link";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import { buttonVariants } from "@/ui/button";

export default function Hero() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8 text-white h-[100vh]">
      <Link
        href="https://github.com/VisiUI/VisiUI"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl max-w-[60%]">
        Build Better with VisiUI
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground"> 
        Supercharge your development with a powerful library of UI components designed to improve productivity and code quality for React developers.
      </p>
      <div className="flex flex-row items-center gap-5">
        <div className="bg-white text-black rounded-md">
          <Link
            href="/"
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Get Stared
          </Link>
        </div>
        <Link
          href="#"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Customize
        </Link>
      </div>
    </div>
  );
}
