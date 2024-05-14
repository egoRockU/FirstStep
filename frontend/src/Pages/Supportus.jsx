import React from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import qr from "../images/qrgcash.jpg"

function Supportus() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {user ? <NavbarLoggedIn /> : <Navbar />}
      <div className="pt-20 pb-20">
        <div className="w-[80%] mx-auto pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#444b88]">
                Support Us
            </h1>
          </div>
          <div className="text-center pt-10">
            <h1 className="text-xl text-[#444b88] flex flex-col gap-3">
                <h1>Donate at Ko-Fi</h1>
                <a href="https://ko-fi.com/firststep" className="hover:underline">https://ko-fi.com/firststep</a>
            </h1>
          </div>
          <div className="w-[50%] mx-auto text-center pt-20 items-center flex flex-col gap-4">
            <h1 className="text-xl text-[#444b88]">Scan to Donate using G-Cash</h1>
            <img src={qr} alt=""/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Supportus;
