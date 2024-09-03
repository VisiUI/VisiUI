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
        className={cn(
          "grid grid-cols-[repeat(3,minmax(0px,1fr))] gap-small my-10")}>
        {FeatureItems.map((FeatureItem, index) => (
          <div
            key={index}
            className={cn("flex flex-col justify-items-center p-4")}>
            <div
              key={index}
              className={cn(
                "flex justify-items-center items-center p-1 font-colvetica",
              )}
            >
              {FeatureItem.subheading}
            </div>
            <div
              key={index}
              className={cn("flex p-1")}>
              {FeatureItem.description}
            </div>
          </div>
        ))}
      </div>
    </FeatureContainer>
  );
};

export default Features;
