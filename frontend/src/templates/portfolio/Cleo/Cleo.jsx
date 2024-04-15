import Header from "./componets/Header";
import Home from "./componets/Home";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import { useState } from "react";
import Portfolios from "./componets/Portfolios";
import Footer from "./componets/Footer";
function Cleo() {

    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
        <div className={darkMode && "dark"}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <main className="bg-emerald-100	background-color: rgb(209 250 229); dark:bg-gray-700	">
            <Home />
            <Skills />
            <Portfolios />
            <Contact />
            <Footer />
            </main>
        </div>            
        </>
    )
}

export default Cleo