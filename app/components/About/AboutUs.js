import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import AboutCard from "./AboutCard";
import CompanyInfoCard from "./CompanyInfoCard";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div>
        <Image
          src="/Driving.png"
          alt="image"
          width={100}
          height={200}
          className="w-full h-full relative"
        />
        <h1 className=" relative bottom-20 left-10 text-[25px] font-bold text-white">
          About Us
        </h1>
        {/* BACKGROUND IMAGE */}
      </div>

      <div className="my-20 px-5">
        <h2 className="font-bold text-[25px] pb-5">
          We reimagine the way the world moves for the better
        </h2>
        <p className="pb-5 mb-5">
          Movement is what we power . It's our lifeblood. It runs through our
          veins. It's what gets us out of bed each morning. It pushes us to
          constantly reimagine how we can move better. For you , For all the
          places you want to go , For all the things you want to get , For the
          all the ways you want to earn. Across the entire world, in real time .
          At the incredible speed of now.
        </p>
        <button className="px-5 font-bold-100  border-b-2">
          Read our full mission statement
        </button>
      </div>

      <div className="relative">
        <Image
          src="/Driving.png"
          alt="CEO Image"
          width={50}
          height={50}
          className="w-full h-[400px]"
        />
      </div>
      <div className="relative bottom-60 left-3 text-white ">
        <h1 className="text-[25px] font-bold-500 pb-5">
          A letter from our CEO
        </h1>
        <p className="pb-5 ">
          Read about our team's commitement to provide everyone one our global
          platform with the technology that can help them move ahead.
        </p>
        <button className="text-white bg-black items-center px-5 py-2 rounded-xl">
          Read Dara's letter
        </button>
        {/* BACKGROUND IMAGE OF A MAN */}
        {/* IMAGE */}
      </div>

      <div className="px-5">
        <AboutCard
          url={"/Driving.png"}
          title={"Sustenability"}
          content={
            "Read about our team's commitement to provide everyone one our global platform with the technology that can help them move ahead."
          }
          btn_content={"Learn more"}
        />
        <AboutCard
          url={"/Driving.png"}
          title={"Rides and beyond"}
          content={
            "Read about our team's commitement to provide everyone one our global platform with the technology that can help them move ahead."
          }
          btn_content={"Our Offering"}
        />
      </div>

      <h1 className="text-[25px] font-serif font-bold px-5 my-10">
        Company Info
      </h1>
      <div className="px-5">
        <CompanyInfoCard
          url={"/Driving.png"}
          title={"Who's driving Uber"}
          content={
            "Read about our team's commitement to provide everyone one our global platform with the technology that can help them move ahead."
          }
          btn_content={"See our leadership"}
        />
        <CompanyInfoCard
          url={"/Driving.png"}
          title={"Getting diversity right"}
          content={
            "Read about our team's commitement to provide everyone one our global platform with the technology that can help them move ahead."
          }
          btn_content={"Read about diversity"}
        />
        <CompanyInfoCard
          url={"/Driving.png"}
          title={"Acting with integrity"}
          content={
            "Read about our team's commitement to provide everyone one our global platform with the technology that can help them move ahead."
          }
          btn_content={"learn more"}
        />
      </div>
      {/* ONE PART IS STILL REMAINING CHECK IT IN THE UBER'S WEBSITE */}
      <Footer />
    </div>
  );
};

export default AboutUs;
