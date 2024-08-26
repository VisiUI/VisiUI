import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, cloneElement } from "react";

interface ActiveLinkProps {
  children: ReactElement;
  href: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const className = isActive
    ? 'text-pink-400 bg-gray-800 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-pink-600 before:content-[""]'
    : "hover:text-cyan-300";

  return (
    <Link href={href} passHref>
      {cloneElement(children, {
        className: `${children.props.className} ${className} px-4 py-2 rounded-full transition-all duration-300 relative`,
      })}
    </Link>
  );
};

export default ActiveLink;
