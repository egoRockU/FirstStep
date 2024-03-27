import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import SocialLinks from "./componets/SocialLinks";
import About from "./componets/About";
import Portfolio from "./componets/Portfolio";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";

const Ezekel = ({ portfolioInfo }) => {
  return (
    <>
      <Navbar portfolioInfo={portfolioInfo} />
      <Home portfolioInfo={portfolioInfo} />
      <About portfolioInfo={portfolioInfo} />
      <Portfolio portfolioInfo={portfolioInfo} />
      <Skills portfolioInfo={portfolioInfo} />
      <SocialLinks portfolioInfo={portfolioInfo} />
    </>
  );
};

export default Ezekel;
