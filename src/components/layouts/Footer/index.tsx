import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-5 py-3">
      <div className="text-slate-50">
        <p>Desenvolvido por:</p>
        <p className="font-semibold">Luis Fernando Alves de Lima</p>
        <p className="font-semibold hover:underline cursor-pointer">
          lima.luisfernando.dev@gmail.com
        </p>
      </div>
      <div className="flex items-center justify-between w-20 text-slate-50 text-4xl">
        <a href="" target="_blank">
          <FaLinkedin />
        </a>
        <a href="" target="_blank">
          <FaGithubSquare />
        </a>
      </div>
    </footer>
  );
};
