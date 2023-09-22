import React from "react";

type Props = {
  bgColor: string;
  txtColor: string;
  linkId: string;
  children: React.ReactNode;
};

const ActionButton = ({ bgColor, txtColor, linkId, children }: Props) => {
  return (
    <a
      href={linkId}
      className={`${bgColor} ${txtColor} rounded-md border border-gray-400 px-5 py-3 outline-none hover:scale-105 hover:bg-opacity-70 focus:ring-1 focus:ring-gray-400/10 active:scale-100 `}
    >
      {children}
    </a>
  );
};

export default ActionButton;
