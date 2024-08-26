import React from "react";
import logo from "../../public/visiui3.png";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        src={logo}
        alt="VisiUI"
        width={40}
        height={40}
        className="h-20 w-auto"
        quality={100}
      />
    </div>
  );
}


export default Logo;
