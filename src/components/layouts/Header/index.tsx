import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../Navbar";
import { PageUpButton } from "../PageUpButton";

import { HeaderProps } from "../../../types/props";
import imgLogo from "../../../assets/img/icons/LF-logo.png";
import "./Header.scss";

export const Header:React.FC<HeaderProps> = ({footerRef}) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(15)

  useEffect(() => {
    const checkVisibility = () => {
      if (headerRef.current && footerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom;
        const footerTop = footerRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        setIsVisible(window.scrollY > headerBottom);

        if(footerTop < windowHeight){
          setBottomOffset(windowHeight - footerTop + 15)
        } else{
          setBottomOffset(15)
        }
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [footerRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="flex justify-between items-center" ref={headerRef}>
        <Link to={"/"}>
          <img src={imgLogo} alt="Logo" className="w-40" />
        </Link>
        <Navbar />
      </header>
      <PageUpButton isVisible={isVisible} onClick={scrollToTop} bottomOffset={bottomOffset}/>
    </>
  );
};
