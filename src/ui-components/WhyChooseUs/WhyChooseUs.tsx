"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Link from "next/link";

interface WhyChooseUsProps {
  title: string;
  description: string;
}

const WhyChooseUsBox = ({ title, description }: WhyChooseUsProps) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        {description}
      </CardItem>
      <div className="flex justify-between items-center mt-20">
        <CardItem
          translateZ={20}
          as={Link}
          href="https://twitter.com/mannupaaji"
          target="__blank"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          Get Started
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

export default function WhyChooseUs() {
  const features = [
    {
      title: "Boost Your Productivity",
      description:
        "Our pre-built, highly customizable components save you time, allowing you to focus on building features rather than reinventing the wheel.",
    },
    {
      title: "Improve Code Quality",
      description:
        "Achieve consistent and maintainable code across your projects. VisiUI promotes best practices, making your code easier to read, understand, and scale.",
    },
    {
      title: "Seamless React Integration",
      description:
        "Designed specifically for React, VisiUI components integrate smoothly with your existing stack, reducing setup time and improving development flow.",
    },
    {
      title: "Opensource Project",
      description:
        "VisiUI is a beginner-friendly project where even less experienced developers can contribute and offer help!",
    },
  ];

  return (
    <div>
      <h1 className="text-white text-center text-7xl font-colvetica">
        Why Choose Us
      </h1>
      <div className="flex flex-wrap gap-4 justify-center medium-large:gap-small">
        {features.map((feature, index) => (
          <WhyChooseUsBox
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
