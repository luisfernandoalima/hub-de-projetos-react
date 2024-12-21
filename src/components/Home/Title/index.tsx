import { Link } from "react-router-dom";

import hubImage from "../../../assets/img/icons/hub-de-rede.png";

import './Title.scss'

export const Title = () => {
  return (
    <section className="p-2 mt-16 title_section">
      <div>
        <h1 className="font-bold text-5xl md:text-6xl">HUB DE PROJETOS</h1>
        <h2 className="font-semibold text-3xl md:text-4xl">Desenvolvedor Web JavaScript</h2>
        <p className="text-lg md:text-xl">Por: Luis Fernando Alves de Lima</p>
        <Link to={"/projects"} className="LinkButton text-slate-50 px-6 py-2 rounded-lg">Projetos</Link>
      </div>
      <img src={hubImage} alt="Hub de Internet" />
    </section>
  );
};
