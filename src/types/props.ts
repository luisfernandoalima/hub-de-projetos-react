import React from "react";

export interface PageUpButtomProps {
  isVisible: boolean;
  bottomOffset: number;
  buttonTransition: number;
  onClick: () => void;
}

export type LinkButtonProps = {
  text: string;
  path: string;
};

export interface HeaderProps {
  footerRef: React.RefObject<HTMLElement>;
}

export interface CardProps {
  name: string;
  desc: string;
  tags: Array<string>;
}
