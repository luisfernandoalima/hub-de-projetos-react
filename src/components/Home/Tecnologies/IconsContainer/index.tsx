import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaGit,
  FaGithub,
  FaBootstrap,
  FaReact,
  FaNode,
} from "react-icons/fa";

import "./IconsContainer.scss";

export const IconsContainer = () => {
  return (
    <div className="icon_container mt-5 mb-4">
      <div className="html">
        <FaHtml5 />
      </div>
      <div className="css">
        <FaCss3 />
      </div>
      <div className="js">
        <FaJs />
      </div>
      <div className="ts">
        <SiTypescript />
      </div>
      <div className="react">
        <FaReact />
      </div>
      <div className="sass">
        <FaSass />
      </div>
      <div className="bootstrap">
        <FaBootstrap />
      </div>
      <div className="tailwind">
        <SiTailwindcss />
      </div>
      <div className="node">
        <FaNode />
      </div>
      <div className="git">
        <FaGit />
      </div>
      <div className="github">
        <FaGithub />
      </div>
      <div className="vite">
        <SiVite />
      </div>
    </div>
  );
};
