import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ProjectPortfolio } from "../pages/Project/Portfolio";
import { ProjectCyberBurguer } from "../pages/Project/CyberBurguer";
import { ProjectMyNotes } from "../pages/Project/MyNotes";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/hub-de-projetos-react" element={<Home />} />
      <Route path="/hub-de-projetos-react/projects" element={<Projects/>}/>
      <Route path="/hub-de-projetos-react/projects/portfolio" element={<ProjectPortfolio/>}/>
      <Route path="/hub-de-projetos-react/projects/cyberburguer" element={<ProjectCyberBurguer/>}/>
      <Route path="/hub-de-projetos-react/projects/mynotes" element={<ProjectMyNotes/>}/>
    </Routes>
  );
};
