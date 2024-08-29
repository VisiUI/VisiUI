import React from "react";
import './styles/About.scss'

function About() {
  return (
    <div className="aboutContainer">
      <div>
        <h3
          style={{
            color: "#8B53FF",
            fontSize: 25,
          }}
          className="text-2xl"
        >
          What is VisiUI?
        </h3>
        <p
          style={{
            maxWidth: 1031,
          }}
          className="text-3xl"
        >
          Designed for scalability and customization, VisiUI offers a
          comprehensive suite of components that seamlessly integrate into your
          React projects, making it the perfect tool for developers, startups,
          and companies alike.
        </p>
      </div>
    </div>
  );
}

export default About;
