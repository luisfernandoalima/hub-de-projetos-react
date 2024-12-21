import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ProjectPortfolio } from "../components/Project/portfolio";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/portfolio" element={<ProjectPortfolio/>}/>
    </Routes>
  );
};
