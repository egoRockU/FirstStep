import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Navbar from "../Components/Newnavbar";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

function Aboutus() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {user ? <NavbarLoggedIn /> : <Navbar />}
      <div className="pt-20 w-full pb-20">
        <div className="w-[80%] mx-auto pt-16">
          <div className="text-center w-full">
            <p className="text-2xl font-bold text-[#444b88]">About us</p>
          </div>
          <div className="w-[60%] mx-auto pt-20 flex flex-col gap-4">
            <p className="text-xl text-[#444b88]">What is FirstStep?</p>
            <p>
              FirstStep is an online profile and portfolio building system for
              fresh graduates from Computer Studies major; featuring automatic
              resume and portfolio template which could help them appear in the
              radar of potential employers.
            </p>
            <p>
              Although we dedicate and catered the web app for fresh graduates
              from computer studies, you can still use it as resume or portfolio
              builder even if you’re not a fresh graduate or in any computer
              related field.
            </p>
          </div>
          <div className="w-[60%] mx-auto pt-20 flex flex-col gap-4">
            <p className="text-xl text-[#444b88]">Who are we?</p>
            <div className="flex flex-col gap-8 items-center">
              <div className="text-center">
                <p className="font-bold text-lg text-[#444b88]">
                  Gerwin Lagutan
                </p>
                <p className="italic">Project Manager / Backend Developer</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-[#444b88]">Lemuel Reyes</p>
                <p className="italic">
                  Software Engineer / Full-stack Developer
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-[#444b88]">
                  Micholo Buenafe
                </p>
                <p className="italic">
                  Software Engineer / Front-end Developer
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-[#444b88]">
                  Syril Tolledo
                </p>
                <p className="italic">UI/UX / Front-end Developer</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-[#444b88]">
                  Jay Ann Rose Gerente
                </p>
                <p className="italic">
                  Quality Assurance / Front-end Developer
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-[#444b88]">
                  Jamaica Rose Grafil
                </p>
                <p className="italic">Researcher/ Front-end Developer</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg text-[#444b88]">
                  Marcus James Tapang
                </p>
                <p className="italic">Documentation / Front-end Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
