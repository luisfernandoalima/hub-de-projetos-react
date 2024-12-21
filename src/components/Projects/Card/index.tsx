import React from "react";

import { LinkButton } from "../../layouts/LinkButton";

import { CardProps } from "../../../types/props";
import { tagList } from "../../../utils/tagList";
import { projectsThumb } from "../../../utils/thumbnails";

import "./ProjectCard.scss";

export const ProjectsCard: React.FC<CardProps> = ({ name, desc, tags, path }) => {
  const takeTags = () => {
    return tags
      .filter((item) => item in tagList)
      .map((item) => <img key={item} src={tagList[item]} alt={item} />);
  };

  const takeThumb = () => {
    return projectsThumb[name]
  }

  return (
    <div className="card p-2">
      <div className="thumbnail_project">
        <img src={takeThumb()} alt="Imagem do Projeto" />
      </div>
      <div className="cardInfo mt-2">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="desc mt-2 mb-2 text-lg">{desc}</p>
        <h3>Tecnologias Utilizadas:</h3>
      </div>
      <div className="tag_div">{takeTags()}</div>
      <LinkButton text="Ver" path={path} />
    </div>
  );
};
