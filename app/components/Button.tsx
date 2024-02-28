import React from "react";

type ButtonProps = {
  title: string;
  theme: string;
  variant?: string;
  redirectToPage?: string;
  blank?: boolean;
};

const Button = ({ theme, variant, title, redirectToPage, blank }: ButtonProps) => {

  if (redirectToPage) {
    return (
      <a href={redirectToPage}
        target={blank ? "_blank" : ""}
        className={`w-full ${variant}`}
      >
        <button
          className={`w-full p-3 rounded-full transition-all ease-in-out duration-100 hover:shadow-lg hover:shadow-red-300
      ${theme === "primary" && "text-white bg-[#FF0000]"}
      ${theme === "secondary" && "border border-[#FF0000] text-[#FF0000]"}
      `}
        >
          {title}
        </button>
      </a>
    )
  }
  return (
    <button
      className={`w-full ${variant} p-3 rounded-full transition-all ease-in-out duration-100 hover:shadow-lg hover:shadow-red-300
      ${theme === "primary" && "text-white bg-[#FF0000]"}
      ${theme === "secondary" && "border border-[#FF0000] text-[#FF0000]"}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
