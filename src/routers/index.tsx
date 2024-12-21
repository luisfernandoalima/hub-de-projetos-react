import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ProjectPortfolio } from "../pages/Project/Portfolio";
import { ProjectCyberBurguer } from "../pages/Project/CyberBurguer";
import { ProjectMyNotes } from "../pages/Project/MyNotes";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projects/portfolio" element={<ProjectPortfolio/>}/>
      <Route path="/projects/cyberburguer" element={<ProjectCyberBurguer/>}/>
      <Route path="/projects/mynotes" element={<ProjectMyNotes/>}/>
    </Routes>
  );
};
