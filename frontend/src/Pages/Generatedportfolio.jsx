import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BasicPortfolio from "../templates/portfolio/BasicPortfolio/BasicPortfolio";
import Ezekel from "../templates/portfolio/Ezekel/Ezekel";
import BasicPortfolio2 from "../templates/portfolio/BasicPortfolio2/BasicPortfolio2";
import Cleo from "../templates/portfolio/Cleo/Cleo";
import Marcus from "../templates/portfolio/Marcus/Marcus";

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
      case "3":
        setTemplate(<BasicPortfolio2 portfolioInfo={portfolioInfo} />);
        break;
      case "4":
        setTemplate(<Cleo portfolioInfo={portfolioInfo} />);
        break;
      case "5":
        setTemplate(<Marcus portfolioInfo={portfolioInfo} />);
        break;
      default:
        setTemplate(<BasicPortfolio portfolioInfo={portfolioInfo} />);
        break;
    }
  };

  return <>{template}</>;
}

export default Generatedportfolio;
