import React, { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(-10, 0);
  }, []);
  return null;
}

export default ScrollToTop;
