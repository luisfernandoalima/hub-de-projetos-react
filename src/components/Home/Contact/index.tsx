import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

import contatoImage from '../../../assets/img/icons/contatos.png'
import "./Contact.scss";

export const HomeContact = () => {
  return (
    <section className="section_contact p-5">
      <h2 className="text-4xl font-semibold text-center text-slate-50">Contato</h2>
      <div className="gap-x-14 mt-5 mb-4">
        <div className="buttonArea">
          <a href="https://github.com/luisfernandoalima">
            <button className="github"><FaGithub/><span>GitHub</span></button>
          </a>
          <a href="mailto:lima.luisfernando.dev@gmail.com">
            <button className="gmail"><FaGoogle/><span>E-mail</span></button>
          </a>
          <a href="https://www.linkedin.com/in/luis-fernando-a-43aaa2230/" target="_blank">
            <button className="linkedin"><FaLinkedin/><span>LinkedIn</span></button>
          </a>
        </div>
        <img src={contatoImage} alt="Imagem de contatos" />
      </div>
    </section>
  );
};
