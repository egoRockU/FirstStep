import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function Grafil({ portfolioInfo }) {
  const { lastName, projects, skills, socialLinks } = portfolioInfo || {};

  return (
    <>
      <Navbar lastName={lastName} />
      <Home portfolioInfo={portfolioInfo} />
      <Portfolio projects={projects} />
      <Experience skills={skills} />
      <Contact portfolioInfo={portfolioInfo} />
      <Footer socialLinks={socialLinks} />
    </>
  );
}

export default Grafil;
