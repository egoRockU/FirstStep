import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg";
import DropdownMenu from "./DropdownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import bell from "../images/bell.svg";

function NavbarloggedinBlack() {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(1); 

    const clickLanding = () => {
        navigate("/");
    };

    const clickResume = () => {
        navigate("/createresume");
    };

    const clickPortfolio = () => {
        navigate("/createportfolio");
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxOpacityScroll = 60; // Scroll position where opacity becomes 60
            const minOpacity = 0.6; // Minimum opacity (60%)
            let opacity;

            if (scrollPosition < maxOpacityScroll) {
                opacity = 1 - (scrollPosition / maxOpacityScroll) * (1 - minOpacity);
            } else {
                opacity = minOpacity;
            }

            setScrollOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="bg-black py-4 fixed w-full z-50 top-0" style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})`, transition: "background-color 0.3s ease-in-out" }}>
            <div className="flex w-full lg:w-[80%] justify-between mx-auto relative">
                <div className="flex items-center gap-1" onClick={clickLanding}>
                    <img src={logo} alt="" className="w-6 h-6 hover:scale-125" />
                    <h1 className="text-2xl text-white">FirstStep</h1>
                </div>
                <div className="hidden lg:flex items-center gap-10">
                    <ul className="flex h-full items-center space-x-10">
                        <li className="text-lg md:text-xl font-medium text-white whitespace-nowrap cursor-pointer" onClick={clickResume}>
                            Resume Builder
                        </li>
                        <li className="text-lg md:text-xl font-medium text-white whitespace-nowrap cursor-pointer" onClick={clickPortfolio}>
                            Portfolio Builder
                        </li>
                        <li className="text-lg md:text-xl font-medium text-white">
                            For Employers
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="items-center gap-2 hidden lg:flex ">
                        <img src={bell} alt="" className="text-white duration-500 cursor-pointer w-8 h-8" />
                        <DropdownMenu />
                    </div>
                </div>
                <div className="flex items-center pr-3 lg:hidden">
                    <GiHamburgerMenu className="text-black cursor-pointer w-8 h-8" onClick={() => setShowMenu(!showMenu)} color="444b88" />
                </div>
                {/* Overlay menu */}
                {showMenu && (
                    <div className="lg:hidden absolute top-full flex justify-end bg-white bg-opacity-80 w-full py-2.5 shadow-lg">
                        <div className="flex flex-col items-center">
                            <ul className="flex flex-col lg:flex-row lg:flex-grow lg:justify-end space-y-4 lg:space-y-0 lg:space-x-10">
                                <li className="text-lg md:text-xl font-medium text-white whitespace-nowrap">
                                    Resume Builder
                                </li>
                                <li className="text-lg md:text-xl font-medium text-white whitespace-nowrap">
                                    Portfolio Builder
                                </li>
                                <li className="text-lg md:text-xl font-medium text-white whitespace-nowrap">
                                    For Employers
                                </li>
                            </ul>
                            <div className="lg:flex items-center gap-2">
                                <DropdownMenu />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavbarloggedinBlack;
