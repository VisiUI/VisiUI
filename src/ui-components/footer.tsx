import React from "react";
import Image from "next/image";
import logo from "../../public/visiui3.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 font-colvetica">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image
                src={logo}
                alt="VisiUI"
                width={50}
                height={50}
                className="h-16 w-auto"
              />
              <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                VisiUI
              </span>
            </a>
            <span className="ml-4 mt-2 text-white">
              VisiUI is a collection of reusable and
              <span className="block ml-4 mt-1">
                customizable React components
              </span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline text-white">
                    Github
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline text-white">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center text-white">
            © 2024{" "}
            <a href="/" className="hover:underline text-white">
              VisiUI™
            </a>
            All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/VisiUI/VisiUI"
              className="text-gray-500 hover:text-white"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.111.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.775.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.527.118-3.18 0 0 1.008-.322 3.3 1.23.957-.267 1.984-.399 3.005-.403 1.02.004 2.047.136 3.006.403 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.877.119 3.18.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.623-5.474 5.921.43.372.814 1.102.814 2.222v3.293c0 .319.191.694.801.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="sr-only">GitHub Page</span>
            </a>
            <a
              href="https://join.slack.com/t/visiui/shared_invite/zt-2oge4h1vn-J18RupLnaPKbmgF_AnhuSw"
              className="text-gray-500 hover:text-white ms-5"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                strokeWidth="0.00024000000000000003"
                style={{ transform: "translateY(-4px)" }} // Adjust the value as needed
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
                  fill="#ffffff"
                />
              </svg>
              <span className="sr-only">Slack Community</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
