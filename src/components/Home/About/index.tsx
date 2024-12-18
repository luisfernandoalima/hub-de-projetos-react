import hubImg from "../../../assets/img/icons/hub.png";

import './About.scss'

export const About = () => {
  return (
    <section className="about_section p-5">
      <h2 className="text-4xl font-semibold">O que é o Hub de Projetos?</h2>
      <div className="gap-x-14 mt-5 mb-4">
        <img src={hubImg} alt="Hub de Computadores" />
        <article className="text-2xl">
          <p className="mb-4">
            Um Hub é um dispositivo que consiste em um ponto de conexão central
            em uma rede de dispositivos. Esses dispositivos podem ser
            computadores, impressoras, servidores etc.
          </p>
          <p>
            Com essa explicação, o "Hub de Projetos" é um site criado com ReactJS que tem como
            funcionalidade conectar todos os sistemas que eu criei e que eu gostaria de
            exibir. Facilitando a organização e exibição dos projetos.
          </p>
        </article>
      </div>
    </section>
  );
};
