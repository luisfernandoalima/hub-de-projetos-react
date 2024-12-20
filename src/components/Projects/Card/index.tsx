import React from "react";

import { LinkButton } from "../../layouts/LinkButton";

import { CardProps } from "../../../types/props";

import "./ProjectCard.scss";

const tagList: Record<string, string> = {
  html: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  css: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  sass: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
  bootstrap: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
  javascript: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  typescript: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  react: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  tailwind: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  nodejs: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
  mongodb: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  mysql: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
};

export const ProjectsCard: React.FC<CardProps> = ({ tags }) => {
  const takeTags = () => {
    return tags
      .filter((item) => item in tagList)
      .map((item) => <img key={item} src={tagList[item]} alt={item} />);
  };

  return (
    <div className="card p-5">
      <div className="thumbnail_project">
        <img src="" alt="Imagem do Projeto" />
      </div>
      <div className="cardInfo mb-5">
        <h2>Titulo do Projeto</h2>
        <p>Descrição</p>
        <h3>Tecnologias Utilizadas:</h3>
      </div>
      <div className="tag_div">{takeTags()}</div>
      <LinkButton text="Ver" path="/" />
    </div>
  );
};
