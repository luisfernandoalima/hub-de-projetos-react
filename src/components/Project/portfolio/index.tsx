import { FaGithub } from "react-icons/fa";
import { PortfolioCarousel } from "../Carousel/portfolio.tsx";

import "../main.scss";

export const ProjectPortfolio = () => {
  return (
    <>
      <section className="project_header">
        <PortfolioCarousel />
        <div className="project_title p-5">
          <h1 className="font-bold text-5xl md:text-4xl lg:text-5xl mb-3">Portfolio</h1>
          <h2 className="font-semibold text-3xl md:text-2xl lg:text-3xl mb-3">Meu primeiro portfolio pessoal</h2>
          <p className="text-xl">Tecnologias utilizadas:</p>
          <ul className="list-disc mt-3 mb-2 ml-2">
            <li>HTML;</li>
            <li>CSS;</li>
            <li>JavaScript;</li>
            <li>Bootstrap.</li>
          </ul>
          <a href="" target="_blank">Ver Projeto</a>
        </div>
      </section>

      <section className="project_info">
        <article>
          <h2>Descrição</h2>
          <p>
            Site One Page para Portfolio Profissional, criado com o objetivo de
            mostrar de forma clara as minhas habilidades e experiências.
          </p>
          <h2>Tecnologias utilizadas</h2>
          <p>Para meu portifólio, foram usadas as seguintes ferramentas:</p>
          <ul className="list-disc mt-2 mb-2 ml-14">
            <li>HTML;</li>
            <li>CSS;</li>
            <li>JavaScript;</li>
            <li>Bootstrap.</li>
          </ul>
          <p>
            Junto ao JavaScript, foi utilizada a biblioteca Atropos que permite
            criar efeitos ao passar o mouse por cima de elementos da página.
          </p>
          <p>
            O Bootstrap, um framework web, também foi utilizado para auxiliar na
            responsividade do site.
          </p>
          <a href="" target="_blank">
            <FaGithub /> Link do Repositório
          </a>
        </article>
      </section>
    </>
  );
};
