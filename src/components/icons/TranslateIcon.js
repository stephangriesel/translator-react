import React from "react";

const TranslateIcon = () => {
  return (
    <div className="flex items-center text-3xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          points="232 216 176 104 120 216"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="136"
          y1="184"
          x2="216"
          y2="184"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="88"
          y1="32"
          x2="88"
          y2="56"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="24"
          y1="56"
          x2="152"
          y2="56"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M120,56a96,96,0,0,1-96,96"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M61.5,88A96,96,0,0,0,152,152"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </svg>
      <p className="pl-2">Translate</p>
    </div>
  );
};

export default TranslateIcon;
