import Header from "./componets/Header";
import Home from "./componets/Home";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import { useState } from "react";
import Portfolios from "./componets/Portfolios";
import Footer from "./componets/Footer";
function Cleo({ portfolioInfo }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode && "dark"}>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          portfolioInfo={portfolioInfo}
        />
        <main className="bg-emerald-100	background-color: rgb(209 250 229); dark:bg-gray-700	">
          <Home portfolioInfo={portfolioInfo} />
          <Skills portfolioInfo={portfolioInfo} />
          <Portfolios portfolioInfo={portfolioInfo} />
          <Contact portfolioInfo={portfolioInfo} />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default Cleo;
