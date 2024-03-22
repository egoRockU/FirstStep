import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicPortfolio from "../templates/portfolio/BasicPortfolio/BasicPortfolio";
import axios from "axios";

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
      default:
        setTemplate(<BasicPortfolio portfolioInfo={portfolioInfo} />);
        break;
    }
  };

  return <>{template}</>;
}

export default Generatedportfolio;
