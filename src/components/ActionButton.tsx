import React from "react";

type Props = {
  bgColor: string;
  txtColor: string;
  linkId: string;
  width?: string;
  children: React.ReactNode;
};

const ActionButton = ({
  bgColor,
  txtColor,
  linkId,
  children,
  width,
}: Props) => {
  return (
    <a
      href={linkId}
      className={`${bgColor} ${txtColor} ${width} rounded-md border border-gray-400 px-5 py-3 text-center outline-none hover:scale-105 hover:bg-opacity-70 focus:ring-1 focus:ring-gray-400/10 active:scale-100 `}
    >
      {children}
    </a>
  );
};

export default ActionButton;
