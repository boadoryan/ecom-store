const HeroBanner = () => {
  return (
    <>
      <div className="border-2 h-[90vh] border-black bg-[#BA68C8] rounded mb-16 flex justify-center  items-center gap-x-12">
        <div className=" font-bold  text-5xl  md:text-6xl lg:text-7xl ">
          <div className=" text-white">
            {/* <h3 className="">YOUR</h3> */}
            {/* <h3 className="gradient-text">BIG SAVINGS</h3> */}
            <h3 className="mb-2">BIG</h3>
            <h3 className="mb-2">SAVINGS</h3>
            <h3 className="">BEST</h3>
            <h3 className="">PRICES</h3>
          </div>
        </div>
        <div>
          <div className="">
            <img
              // className="object-fill h-[240px] md:h-[300px] lg:h-[420px] order-1"
              className="object-fill h-[240px] md:h-[300px] lg:h-[720px] order-1"
              src="assets/Catalogue-amico.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
