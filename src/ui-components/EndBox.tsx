import React from "react";
import Button from "./Button";

function EndBox() {
  return (
    <div className="flex justify-center items-center text-center p-24">
      <div className="flex justify-center items-center text-center flex-col bg-custom-gradient p-20 w-large rounded-[60px]">
        <p className="text-xl w-large mt-10">
          VisiUI aims to be a library with pre-built components that everyone
          can use with ReactJS. These components are editable and can be used as
          needed, making Front-End Development easier than ever.
        </p>
        <Button text="Get Started" backgroundColor="#fff" padding="15px 25px" borderRadius="100px" border="none" color="#000" margin="40px"/>
      </div>
    </div>
  );
}

export default EndBox;
