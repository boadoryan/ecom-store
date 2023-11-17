// ScrollToTop.js
import React, { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null; // This component doesn't render any content
}

export function ScrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: offsetTop - 40,
      behavior: "smooth",
    });
  }
}
