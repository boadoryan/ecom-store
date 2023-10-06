// ScrollToTop.js
import React, { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null; // This component doesn't render any content
}

export default ScrollToTop;
