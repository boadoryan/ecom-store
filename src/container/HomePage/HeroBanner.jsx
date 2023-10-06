const HeroBanner = () => {
  return (
    <>
      <div className=" bg-[#deecf6] grid md:grid-cols-2 border-2 border-black rounded mb-8 md:mb-20">
        <div className="md:order-1 flex justify-center items-center  md:col-span-1 ">
          <img
            className=" w-[350px] xl:w-[auto] xl:max-h-[500px] object-cover"
            src="assets/Catalogue-amico.svg"
            alt=""
          />
        </div>
        <div className="flex justify-center align-center flex-col p-6 sm:p-8 md:p-12">
          <h3 className="text-black mb-2 text-base xl:text-xl">
            Welcome to Trendie!
          </h3>
          <h3 className="text-black mb-12  font-bold text-7xl xl:text-8xl ">
            Find <span className="gradient-text">everything</span> you need at the best prices.
          </h3>
          {/* <h3 className="text-black mb-6 text-xl xl:text-2xl">Only at Trendie</h3> */}
          <button className="border rounded text-lg text-black w-[140px]  border-black py-3 bg-white hover:bg-[#cde2cd]">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
