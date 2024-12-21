import {LinkButton} from '../../layouts/LinkButton'

import projectsImage from "../../../assets/img/icons/gerenciamento-de-projetos.png";

import "./Projects.scss";

export const HomeProjects = () => {
  return (
    <section className="section_projects p-5">
      <h2 className="text-4xl font-semibold">Projetos</h2>
      <div className="gap-x-14 mt-5 mb-4">
        <article className="text-3xl flex-col items-center justify-center">
          <p className="mb-4">Veja todos os meu projetos:</p>
          <LinkButton text="Clique aqui!" path={"/hub-de-projetos-react/projects"}/>
        </article>
        <img src={projectsImage} alt="Imagem de Projetos" />
      </div>
    </section>
  );
};
