const HeroBanner = () => {
  return (
    <>
      <div className=" bg-[#e2ebf8] border-2 border-black flex flex-col  justify-between items-center rounded mb-16 md:flex md:flex-row md:px-8 lg:px-12 ">
        <div className="flex justify-center align-center md:order-1 md:mr-12 2xl:mr-48 py-4">
          <img
            className="object-fill h-[340px] md:h-[340px] lg:h-[380px] 2xl:h-[440px]"
            src="assets/Catalogue-amico.svg"
            alt=""
          />
        </div>
        <div className="p-8 xl:w-[700px] 2xl:w-[760px] 2xl:ml-12">
          <h3 className="text-black mb-8 md:mb-6 flex font-bold text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
            Find everything you need
          </h3>
          <h3 className="text-black mb-8 md:mb-6  flex font-medium text-2xl md:text-lg lg:text-2xl">
            Only at Trendie
          </h3>
          <button className="border rounded text-lg text-black  border-black py-3 md:py-2 w-[140px] hover:bg-[#EAF2FC]">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
