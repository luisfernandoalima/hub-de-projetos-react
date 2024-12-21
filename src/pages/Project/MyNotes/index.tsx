import { FaGithub } from "react-icons/fa";
import { MyNotesCarousel } from "../../../components/Project/Carousel/mynotes";

import "../main.scss";

export const ProjectMyNotes = () => {
  return (
    <>
      <section className="project_header">
        <MyNotesCarousel />
        <div className="project_title p-5">
          <h1 className="font-bold text-5xl md:text-4xl lg:text-5xl mb-3">
            MyNotes
          </h1>
          <h2 className="font-semibold text-3xl md:text-2xl lg:text-3xl mb-3">
            Sistema de notas utilizando NodeJS e MongoDB.
          </h2>
          <p className="text-xl">Tecnologias utilizadas:</p>
          <ul className="list-disc mt-3 mb-2 ml-2">
            <li>HTML;</li>
            <li>CSS;</li>
            <li>JavaScript;</li>
            <li>Bootstrap;</li>
            <li>SASS;</li>
            <li>Handlebars;</li>
            <li>NodeJS;</li>
            <li>MongoDB.</li>
          </ul>
          <a
            href=""
            target="_blank"
            className="disabled"
            onClick={(e) => e.preventDefault()}
          >
            Projeto não hospedado
          </a>
        </div>
      </section>

      <section className="project_info">
        <article>
          <h2>Descrição</h2>
          <p>
            O MyNotes é um sistema de notas desenvolvido para criar lembretes.
          </p>
          <p>
            O sistema foi criado para colocar em prática meus novos
            conhecimentos em NodeJS.
          </p>

          <h2>Funcionalidades</h2>
          <ul>
            <li>
              Sistema de login (passport) realizado localmente (passport-local);
            </li>
            <li>Criptografia de senhas (bcryptjs);</li>
            <li>Sistema de template de páginas (express-handlebars);</li>
            <li>Consulta e registro no banco de dados (mongoose);</li>
            <li>Salvamento de imagens (multer).</li>
          </ul>

          <h2>Tecnologias Utilizadas</h2>
          <ul>
            <li>HTML5;</li>
            <li>CSS3;</li>
            <li>JavaScript;</li>
            <li>Bootstrap;</li>
            <li>SASS;</li>
            <li>Handlebars;</li>
            <li>NodeJS;</li>
            <li>MongoDB.</li>
          </ul>

          <h3>Módulos do NodeJS</h3>
          <ul>
            <li>bcryptjs;</li>
            <li>body-parser;</li>
            <li>express;</li>
            <li>express-handlebars;</li>
            <li>express-session;</li>
            <li>mongoose;</li>
            <li>multer;</li>
            <li>passport;</li>
            <li>passport-local.</li>
          </ul>
          <h2>Conclusão</h2>
          <p>
            Essa rede de sistemas que se comunicam entre eles pode ser usadaa em
            diversas áreas do ramo alimentício, não somente o de hamburguerias
            que foi proposto pelo grupo. Com isso, esse trabalho permitiu que
            pudessemos notar como funciona a criação de diversos sistemas que
            interagem um com o outro e como ligar esses sistemas a necissidades
            de uma empresa.
          </p>
          <a
            href="https://github.com/luisfernandoalima/MyNotes"
            target="_blank"
          >
            <FaGithub /> Link do Repositório
          </a>
        </article>
      </section>
    </>
  );
};
