import React from "react";

const CategoriesBanner = () => {
  // Scroll to the section leaving margin on the top.
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: offsetTop - 40,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl lg:mb-4 mb-4">
        Find the best deals on:
      </h2>
      <div className="md:mb-20 mb-8">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {/* Electronics category */}
          <a onClick={() => scrollToSection("electronics-homepage-section")}>
            <div className="homepage-category-electronics-container flex flex-col justify-end h-[450px] p-6  border-2 border-black rounded shadow-md hover:scale-105 hover:brightness-90 hover:cursor-pointer transition-transform duration-300 ease-in-out ">
              <div className="homepage-category-text text-white">
                <p className="text-xl  mb-2">Newest</p>
                <p className="text-5xl md:text-5xl font-bold">Electronics</p>
              </div>
            </div>
          </a>

          {/* Men's clothing category */}
          <a onClick={() => scrollToSection("mens-clothing-homepage-section")}>
            <div className="homepage-category-mens-clothing-container flex flex-col justify-end h-[450px] p-6  border-2 border-black rounded shadow-md hover:scale-105 hover:brightness-90 hover:cursor-pointer transition-transform duration-300 ease-in-out ">
              <div className="homepage-category-text text-white">
                <p className="text-xl  mb-2">Men's</p>
                <p className="text-5xl md:text-5xl font-bold">Clothing</p>
              </div>
            </div>
          </a>

          {/* Jewelry category */}
          <a onClick={() => scrollToSection("jewelery-homepage-section")}>
            <div className="homepage-category-jewelry-container flex flex-col justify-end h-[450px] p-6  border-2 border-black rounded shadow-md hover:scale-105 hover:brightness-90 hover:cursor-pointer transition-transform duration-300 ease-in-out ">
              <div className="homepage-category-text text-white">
                <p className="text-xl  mb-2">Artisan</p>
                <p className="text-5xl md:text-5xl font-bold">Jewelry</p>
              </div>
            </div>
          </a>

          {/* Women's clothing category */}
          <a
            onClick={() => scrollToSection("womens-clothing-homepage-section")}
          >
            <div className="homepage-category-womens-clothing-container flex flex-col justify-end h-[450px] p-6  border-2 border-black rounded shadow-md hover:scale-105 hover:brightness-90 hover:cursor-pointer transition-transform duration-300 ease-in-out ">
              <div className="homepage-category-text text-white">
                <p className="text-xl  mb-2">Women's</p>
                <p className="text-5xl md:text-5xl font-bold">Clothing</p>
              </div>
            </div>
          </a>
          {/* <a onClick={() => scrollToSection("electronics-homepage-section")}>
            <div className=" flex flex-col justify-end h-[300px] p-6 bg-[#FFCBA4] border-2 border-black rounded shadow-md hover:scale-105 hover:brightness-90 transition-transform duration-300 ease-in-out ">
              <p className="text-xl text-black mb-2">Newest</p>
              <p className="text-5xl md:text-4xl text-black font-bold">
                Electronics
              </p>
            </div>
          </a> */}
          {/* <a
            onClick={() => scrollToSection("womens-clothing-homepage-section")}
          >
            <div className=" flex flex-col justify-end h-[300px] p-6 bg-[#FFF3B0] border-2 border-black rounded shadow-md hover:scale-105 hover:brightness-90 transition-transform duration-300 ease-in-out">
              <p className="text-xl text-black mb-2">Women's </p>
              <p className=" text-5xl md:text-4xl text-black font-bold">
                Clothing
              </p>
            </div>
          </a>
          <a onClick={() => scrollToSection("jewelery-homepage-section")}>
            <div className=" flex flex-col justify-end h-[300px] p-6 bg-[#AEC6CF] border-2 border-black rounded shadow-md hover:scale-105 hover:brightness-90 transition-transform duration-300 ease-in-out">
              <p className="text-xl text-black mb-2">Artisan</p>
              <p className=" text-5xl md:text-4xl text-black font-bold">
                Jewelry
              </p>
            </div>
          </a>
          <a onClick={() => scrollToSection("mens-clothing-homepage-section")}>
            <div className=" flex flex-col justify-end h-[300px] p-6 bg-[#A1EFD3] border-2 border-black rounded shadow-md hover:scale-105 hover:brightness-90 transition-transform duration-300 ease-in-out">
              <p className="text-xl text-black mb-2">Men's</p>
              <p className=" text-5xl md:text-4xl text-black font-bold">
                Clothing
              </p>
            </div>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default CategoriesBanner;
