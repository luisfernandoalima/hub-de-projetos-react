import { ProjectsCard } from "../Card";

import "./ProjectsMainArea.scss";

export const ProjectsMainArea = () => {
  return (
    <section className="p-5 main_area">
      <div className="project_area">
        <ProjectsCard
          name="MyNotes"
          desc="O MyNotes é um sistema de notas desenvolvido para criar lembretes. O sistema foi criado para colocar em prática meus novos conhecimentos em NodeJS."
          tags={[
            "html",
            "css",
            "sass",
            "bootstrap",
            "javascript",
            "nodejs",
            "mongodb",
          ]}
          path="/mynotes"
        />
        <ProjectsCard
          name="Portfolio"
          desc='Site One Page para Portfolio Profissional, criado com o objetivo de mostrar de forma clara as minhas habilidades e experiências.'
          tags={["html", "css", "javascript", "bootstrap"]}
          path="/portfolio"
        />
        <ProjectsCard
          name="CyberBurguer"
          desc='Projeto para realização do trabalho de conclusão de curso de Desenvolvimento de Sistemas (DS) da Etec Jardim Ângela.'
          tags={["html", "css", "javascript", "php", "java", "mysql"]}
          path="/cyberburguer"
        />
      </div>
    </section>
  );
};
