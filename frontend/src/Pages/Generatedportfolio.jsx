import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BasicPortfolio from "../templates/portfolio/BasicPortfolio/BasicPortfolio";
import Ezekel from "../templates/portfolio/Ezekel/Ezekel";

function Generatedportfolio() {
  const { templateId, portfolioId } = useParams();
  const [template, setTemplate] = useState();

  useEffect(() => {
    getPortfolioInfo();
  }, [portfolioId]);

  const getPortfolioInfo = () => {
    axios
      .post(
        "/api/portfolio/retrieveone",
        { portfolioId },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        identifyTemplate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const identifyTemplate = (portfolioInfo) => {
    switch (templateId) {
      case "1":
        setTemplate(<BasicPortfolio portfolioInfo={portfolioInfo} />);
        break;
      case "2":
        setTemplate(<Ezekel portfolioInfo={portfolioInfo} />);
        break;
      default:
        setTemplate(<BasicPortfolio portfolioInfo={portfolioInfo} />);
        break;
    }
  };

  return <>{template}</>;
}

export default Generatedportfolio;
