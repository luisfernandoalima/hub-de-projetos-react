import React, { useState } from "react";
import { cyberburguerImages } from "../../../utils/projectsImages";

import "./Carousel.scss";
export const CyberBurguerCarousel = () => {
  const [activeImage, setActiveImage] = useState(cyberburguerImages.cyberburguer1);

  const clearActive = () => {
    const imgs = document.querySelectorAll('.imgs_area img')

    imgs.forEach(img => {
      img.classList.remove("active")
    })
  };

  const changeImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setActiveImage(e.currentTarget.src);
    clearActive()
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="img_div">
      <div className="img_area">
        <img src={activeImage} alt="Imagem escolhida" />
      </div>
      <div className="imgs_area">
        <img
          src={cyberburguerImages.cyberburguer1}
          alt="Imagem 01"
          onClick={changeImage}
        />
        <img
          src={cyberburguerImages.cyberburguer2}
          alt="Imagem 02"
          onClick={changeImage}
        />
        <img
          src={cyberburguerImages.cyberburguer3}
          alt="Imagem 03"
          onClick={changeImage}
        />
        <img
          src={cyberburguerImages.cyberburguer4}
          alt="Imagem 04"
          onClick={changeImage}
        />
        <img
          src={cyberburguerImages.cyberburguer5}
          alt="Imagem 05"
          onClick={changeImage}
        />
      </div>
    </div>
  );
};
