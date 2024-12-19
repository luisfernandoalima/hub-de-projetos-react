import React from "react";

export interface PageUpButtomProps {
  isVisible: boolean;
  bottomOffset: number;
  onClick: () => void;
}

export type LinkButtonProps = {
  text: string;
  path: string;
};

export interface HeaderProps {
  footerRef: React.RefObject<HTMLElement>
}