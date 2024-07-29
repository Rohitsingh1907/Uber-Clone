import Image from "next/image";
const FrontPage = () => {
  return (
    <div className="text-white bg-black px-5 py-5 xl:flex xl:flex-row xl:justify-between xl:px-10 ">
      <div className="xl:pr-10">
        <h1 className="text-[40px] bold-48 pb-5 xl:text-[55px]">
          Go anywhere with Uber
        </h1>
        <p className="text-[15px] py-5 xl:text-[20px]">
          Request a ride , Hop in , and Go.
        </p>
        <input
          type="text"
          placeholder="Enter location"
          className="px-5 mb-5 py-5 rounded-2xl xl:w-full xl:text-[20px]"
        />
        <br />
        <input
          type="text"
          placeholder="Enter destination"
          className="px-5 mb-5 py-5 rounded-2xl xl:w-full xl:text-[20px]"
        />
        <br />
        <button className="text-black text-[15px] font-bold  bg-white rounded-xl px-5 py-5 mt-5 mb-10 xl:text-[20px] w-64">
          See prices
        </button>
      </div>
      <div>
        <Image
          src="/Driving.png"
          alt="driving"
          width={300}
          height={220}
          className="xl:w-[620px] h-[410px]"
        />
      </div>
    </div>
  );
};

export default FrontPage;
