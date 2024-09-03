import React from "react";
import { FeatureContainer, FeatureHeader } from "@/ui-components/FeatureContainer";
import { cn } from "@/utils/utils";

type Content = {
  heading: string;
  sections: {
    data_illustration?: string;
    subheading: string;
    description: string;
  }[];
}

interface FeatureProps {
  content: Content;
}

const Features: React.FC<FeatureProps> = ({ content }) => {
  const FeatureItems = content.sections;

  return (
    <FeatureContainer>
      <FeatureHeader>{content.heading}</FeatureHeader>

      <div
        className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-5")}>
        {FeatureItems.map((FeatureItem, index) => (
          <div
            className={cn("flex flex-col justify-items-center p-2")}>
            <div
              className={cn(
                "flex justify-items-center items-center p-1 font-colvetica",
              )}
            >
              {FeatureItem.subheading}
            </div>
            <div
              className={cn("flex justify-items-center items-center p-1 inter-var")}>
              {FeatureItem.description}
            </div>
          </div>
        ))}
      </div>
    </FeatureContainer>
  );
};

export default Features;
