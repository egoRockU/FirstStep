import React, { useEffect, useState } from "react";
import logo from "../images/NotFoundLogo.png";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const [message, setMessage] = useState();

  useEffect(() => {
    checkProfileType();
  }, []);

  const styles = `
  body {
    background-color: #efefef;
    font-family: "Montserrat", sans-serif;
  }

  .box {
    width: 1000px;
    height: 500px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    flex-direction: column;
    right: 0;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .logo {
    max-width: 18%;
    max-height: 18%;
  }

  .text1 {
    margin-bottom: 0px;
    color: #1f0954;
  }

  .text2 {
    margin-bottom: 0px;
  }

  .text3 {
    margin-top: 0px;
    margin-bottom: 20px;
  }

  .button {
    background-color: white;
    padding: 5px;
    border: 2px solid gray;
    font-family: "Montserrat", sans-serif;
  }

  .button:active {
    background-color: #72737b;
  }
`;

  const checkProfileType = () => {
    const profileType = user.profileType;
    if (
      location.pathname === "/createresume" ||
      location.pathname === "/createportfolio"
    ) {
      if (!profileType || profileType === "employer") {
        setMessage(
          <>
            <h3 className="text1">Unauthorized Access</h3>
            <p className="text2">
              You can't access this page unless you're an applicant.
            </p>
          </>
        );

        return;
      }
    }

    setMessage(
      <>
        <h3 className="text1">404 page not found</h3>
        <p className="text2">
          We can't seem to find the page you're looking for
        </p>
        <p className="text3">
          The link you followed is probably broken or the page has been removed.
        </p>
      </>
    );
  };

  return (
    <>
      <style>{styles}</style>
      <div className="box">
        <img className="logo" src={logo} alt="Logo" />
        {message}
        <button className="button">Go to homepage</button>
      </div>
    </>
  );
}

export default NotFound;
