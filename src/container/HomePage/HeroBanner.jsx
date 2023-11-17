import { ScrollToSection } from "../../utils/scrollUtils";
const HeroBanner = () => {
  return (
    <>
      <div className=" bg-[#deecf6] grid md:grid-cols-2 border-2 border-black rounded mb-8 md:mb-20">
        <div className="flex justify-center items-center  md:col-span-1 md:order-1">
          <img
            className=" w-[300px] xl:w-[auto] xl:max-h-[500px] object-cover hidden md:block"
            src="assets/hero_image.svg"
            alt=""
          />
        </div>
        <div className="flex justify-center align-center flex-col p-6 sm:p-8 md:p-12">
          <h3 className=" mb-2 text-xl xl:text-xl">Welcome to Shoply!</h3>
          <h3 className="mb-10 font-bold text-5xl xl:text-7xl ">
            Find <span className="gradient-text">everything</span> you need at
            the best prices.
          </h3>
          <button
            onClick={() => ScrollToSection("mens-clothing-homepage-section")}
            className="border rounded py-2.5 w-[144px] border-black  bg-white hover:bg-[#f4f4f4]"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
