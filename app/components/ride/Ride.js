import Header from "../Header";
import SuggestCard from "./SuggestCard";

const Ride = () => {
  return (
    <div>
      <Header />
      <select className="px-5 font-bold text-[20px] gap-0">
        <option className="">Ride</option>
        <option>Request a Ride</option>
        <option>Reserve a ride</option>
        <option>See prices</option>
        <option>Explore ride option</option>
      </select>

      <div className="px-5">
        <p className="text-[30px]  py-5 xl:text-[20px] font-bold">
          Request a ride for now or later
        </p>
        <p className="">Add your trip details , hop in and go.</p>
        <input
          type="text"
          placeholder="Enter location"
          className="px-5 mb-5 py-5 rounded-2xl xl:w-full xl:text-[20px] text-black bg-gray-200"
        />
        <br />
        <input
          type="text"
          placeholder="Enter destination"
          className="px-5 mb-5 py-5 rounded-2xl xl:w-full xl:text-[20px] text-black bg-gray-200"
        />
        <br />
        <button className="text-white text-[15px] font-bold  bg-black rounded-xl px-5 py-5 mt-5 mb-10 xl:text-[20px] ">
          See prices
        </button>
      </div>

      <div>
        <h1 className="text-[25px] font-bold my-2 mx-4">Suggestions</h1>
        <SuggestCard
          title="Ride"
          content="Ride with uber we provide a safety to all and provide a fantastic ride to you"
          btn_cnt="Book a Ride"
          url="/Driving.png"
        />
        <SuggestCard
          title="Ride"
          content="Ride with uber we provide a safety to all and provide a fantastic ride to you"
          btn_cnt="Book a Ride"
          url="/Driving.png"
        />
        <SuggestCard
          title="Ride"
          content="Ride with uber we provide a safety to all and provide a fantastic ride to you"
          btn_cnt="Book a Ride"
          url="/Driving.png"
        />
      </div>
    </div>
  );
};

export default Ride;
