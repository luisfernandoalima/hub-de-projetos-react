import { Title } from "../../components/Home/Title";
import { About } from "../../components/Home/About";
import { HomeProjects } from "../../components/Home/Projects";
import { HomeTecnologies } from "../../components/Home/Tecnologies";

export const Home = () => {
  return (
    <>
      <Title />
      <About />
      <HomeProjects />
      <HomeTecnologies />
    </>
  );
};
