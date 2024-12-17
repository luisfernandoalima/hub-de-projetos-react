import hubImage from "../../../assets/img/icons/hub-de-rede.png";

import './Title.scss'

export const Title = () => {
  return (
    <section className="p-2">
      <div>
        <h1 className="font-bold text-5xl md:text-6xl">HUB DE PROJETOS</h1>
        <h2 className="font-semibold text-3xl md:text-4xl">Desenvolvedor Web JavaScript</h2>
        <p className="text-lg md:text-xl">Por: Luis Fernando Alves de Lima</p>
      </div>
      <img src={hubImage} alt="Hub de Internet" />
    </section>
  );
};
