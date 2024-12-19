import React from "react";
import { FaAngleUp } from "react-icons/fa";

import "./PageUpButton.scss";

import { PageUpButtomProps } from "../../../types/props";

export const PageUpButton:React.FC<PageUpButtomProps> = ({isVisible, onClick, bottomOffset, buttonTransition}) => {
 
  return (
    <>
      <button className="PageUp_Button"
        style={{
            right: isVisible?"15px": "-150px",
            bottom: `${bottomOffset}px`,
            transition: `${buttonTransition}s`
        }}
        onClick={onClick}
      >
        <FaAngleUp />
      </button>
    </>
  );
};
