import React, { ReactNode } from "react";
import { cn } from "../../utils/utils";

interface FeatureContainerProps {
  children: ReactNode;
}

export const FeatureContainer: React.FC<FeatureContainerProps> = ({
  children,
}) => {
  return (
    <section
      className={cn(
        "flex flex-wrap w-screen items-center justify-center bg-[black]",
      )}
    >
      <div
        className={cn(
          "flex flex-wrap flex-col w-large items-center justify-between bg-[white] rounded-xl",
        )}
      >
        {children}
      </div>
    </section>
  );
};

interface FeatureHeaderProps {
  children: string;
}

export const FeatureHeader: React.FC<FeatureHeaderProps> = ({ children }) => {
  return (
    <div
      className={cn(
        "flex font-colvetica text-7xl text-transparent bg-clip-text bg-custom-gradient mt-5",
      )}
    >
      {children}
    </div>
  );
};
