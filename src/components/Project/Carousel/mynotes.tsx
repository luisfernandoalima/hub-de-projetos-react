import React, { useState } from "react";
import { mynotesImages } from "../../../utils/projectsImages";

import "./Carousel.scss";
export const MyNotesCarousel = () => {
  const [activeImage, setActiveImage] = useState(mynotesImages.mynotes1);

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
        <img src={activeImage} alt="" />
      </div>
      <div className="imgs_area">
        <img
          src={mynotesImages.mynotes1}
          alt="Imagem 01"
          onClick={changeImage}
        />
        <img
          src={mynotesImages.mynotes2}
          alt="Imagem 02"
          onClick={changeImage}
        />
        <img
          src={mynotesImages.mynotes3}
          alt="Imagem 03"
          onClick={changeImage}
        />
        <img
          src={mynotesImages.mynotes4}
          alt="Imagem 04"
          onClick={changeImage}
        />
        <img
          src={mynotesImages.mynotes5}
          alt="Imagem 05"
          onClick={changeImage}
        />
      </div>
    </div>
  );
};
