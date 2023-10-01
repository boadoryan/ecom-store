const HeroBanner = () => {
  return (
    <>
      <div className="border-2 border-black rounded mb-16 grid lg:grid-cols-2 p-8 gap-4">
        <div className=" font-bold flex items-center text-5xl  md:text-6xl lg:text-7xl md:ml-8 lg:ml-12 xl:ml-20 2xl:ml-20">
          <div>
            <h3 className="">YOUR</h3>
            <h3 className="gradient-text">ONE-STOP SHOP</h3>
            <h3 className="">FOR ALL YOUR NEEDS.</h3>
          </div>
        </div>
        <div>
          <div className="flex justify-center align-center items-center mt-8">
            <img
              className="object-fill h-[240px] md:h-[300px] lg:h-[420px] order-1"
              src="assets/undraw_web_shopping_re_owap.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
