import { Title } from "../../components/Home/Title";
import { About } from "../../components/Home/About";
import { HomeProjects } from "../../components/Home/Projects";
import { HomeTecnologies } from "../../components/Home/Tecnologies";
import { HomeContact } from "../../components/Home/Contact";

export const Home = () => {
  return (
    <>
      <Title />
      <About />
      <HomeProjects />
      <HomeTecnologies />
      <HomeContact />
    </>
  );
};
