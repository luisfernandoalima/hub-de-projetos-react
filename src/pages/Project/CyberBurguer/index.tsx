import { FaGithub } from "react-icons/fa";
import { CyberBurguerCarousel } from "../../../components/Project/Carousel/cyberburguer";

import "../main.scss";

export const ProjectCyberBurguer = () => {
  return (
    <>
      <section className="project_header">
        <CyberBurguerCarousel />
        <div className="project_title p-5">
          <h1 className="font-bold text-5xl md:text-4xl lg:text-5xl mb-3">
            CyberBurguer
          </h1>
          <h2 className="font-semibold text-3xl md:text-2xl lg:text-3xl mb-3">
            Trabalho de Conclusão de Curso (TCC)
          </h2>
          <p className="text-xl">Tecnologias utilizadas:</p>
          <ul className="list-disc mt-3 mb-2 ml-2">
            <li>HTML;</li>
            <li>CSS;</li>
            <li>JavaScript;</li>
            <li>Bootstrap;</li>
            <li>PHP;</li>
            <li>Java;</li>
            <li>MySQL.</li>
          </ul>
          <a href="" target="_blank" className="disabled"  onClick={e => e.preventDefault() }>
            Projeto não hospedado
          </a>
        </div>
      </section>

      <section className="project_info">
        <article>
          <h2>Descrição</h2>
          <p>
            Esse projeto foi o trabalho de conclusão de curso de Desenvolvimento
            de Sistemas (DS) da Etec Jardim Ângela.
          </p>
          <p>
            A ideia original era criar um sistema para uma hamburgueria fictícia
            com temática de videogames. Para atingir esse objetivo, decidimos
            criar diferentes sistemas para desktops, dispositivos mobile e para
            usar na web. Sendo eles:
          </p>
          <ol>
            <li>Desktop:</li>
            <ul>
              <li>Aplicativo para a cozinha;</li>
              <li>Aplicativo para o caixa;</li>
              <li>Aplicativo para o administrador.</li>
            </ul>
            <li>Dispositivos mobile:</li>
            <ul>
              <li>Aplicativo para o garçom;</li>
              <li>Aplicativo de códigos de promoções para o cliente.</li>
            </ul>
            <li>Web:</li>
            <ul>
              <li>Site promocional;</li>
              <li>Cardápio;</li>
              <li>Tela de pedidos.</li>
            </ul>
          </ol>
          <h2>Ferramentas utilizadas</h2>
          <h3>Aplicativo Desktop:</h3>
          <p>
            Para todos os aplicativos desktops foram utilizadas ferramentas
            básicas para o front-end: HTML5, CSS3. Javascript. O Bootstrap
            também foi utilizado para melhorar o design do sistema. Já no
            back-end, o PHP foi a linguagem escolhida. Para permitir que o
            sistema fosse similar a um programa próprio de computar, o NW.js foi
            utilizado para converter os sites para aplicativos desktops.
          </p>
          <h3>Aplicativo Mobile</h3>
          <p>
            O aplicativo utilizado pelo garçom foi criado com ferramentas para a
            web (HTML5, CSS3, Javascript, Bootstrap e PHP) e, com ajuda da
            tecnoligia WebView, foi possível criar um aplicativo android que
            emule o site.
          </p>
          <p>
            O aplicativo de promoções utilizado pelos clientes foi criado em
            JAVA no Android Studio.
          </p>
          <h3>Web</h3>
          <p>
            Todos os sistemas para a web foram criados utilizando HTML5, CSS3,
            Javascript, Bootstrap e PHP.
          </p>
          <h2>Conclusão</h2>
          <p>
            Essa rede de sistemas que se comunicam entre eles pode ser usadaa em
            diversas áreas do ramo alimentício, não somente o de hamburguerias
            que foi proposto pelo grupo. Com isso, esse trabalho permitiu que
            pudessemos notar como funciona a criação de diversos sistemas que
            interagem um com o outro e como ligar esses sistemas a necissidades
            de uma empresa.
          </p>
          <a href="https://github.com/luisfernandoalima/CyberBurguer" target="_blank">
            <FaGithub /> Link do Repositório
          </a>
        </article>
      </section>
    </>
  );
};
