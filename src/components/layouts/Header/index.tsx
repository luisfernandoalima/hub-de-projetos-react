import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../Navbar";
import { PageUpButton } from "../PageUpButton";

import imgLogo from "../../../assets/img/icons/LF-logo.png";
import "./Header.scss";

export const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom;

        setIsVisible(window.scrollY > headerBottom);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

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
      <PageUpButton isVisible={isVisible} onClick={scrollToTop} />
    </>
  );
};
