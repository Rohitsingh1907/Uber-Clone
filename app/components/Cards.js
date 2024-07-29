// interface CardProps{
//   title:string,
//   content:string,
//   btn_content:string,
//   url:string

import Image from "next/image";

const CardDummyR = ({ title, content, btn_content, url }) => {
  return (
    <div className="px-5 mt-10 xl:flex xl:flex-row xl:gap-20 xl:px-28">
      <div>
        <Image
          src={url}
          alt="image"
          width={320}
          height={350}
          className="rounded-2xl xl:w-[720px] xl:h-[600px]"
        />
      </div>
      <div className="xl:pt-32">
        <h1 className="text-[30px] font-bold mb-5 py-0 ">{title}</h1>
        <p className="mb-10">{content}</p>
        <button className="bg-black text-white px-5 py-5 rounded-2xl mb-10 text-[18px]">
          {btn_content}
        </button>
      </div>
    </div>
  );
};

const CardDummyL = ({ title, content, btn_content, url }) => {
  return (
    <div className="px-5 mt-10 xl:flex xl:flex-row xl:gap-16 xl:px-28">
      <div className="xl:pt-32">
        <h1 className="text-[30px] font-bold mb-5 py-0 ">{title}</h1>
        <p className="mb-10">{content}</p>
        <button className="bg-black text-white px-5 py-5 rounded-2xl mb-10 text-[18px]">
          {btn_content}
        </button>
      </div>
      <div>
        <Image
          src={url}
          alt="image"
          width={320}
          height={350}
          className="rounded-2xl xl:w-[720px] xl:h-[600px]"
        />
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div>
      <CardDummyR
        title="Drive when you want , make what you need"
        content="Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
        btn_content="Get started"
        url="/Driving.png"
      />
      <CardDummyL
        title="The Uber you know, reimagined for business"
        content="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
        btn_content="Get started"
        url="/Driving.png"
      />
      <CardDummyR
        title="Make money by renting out your car"
        content="Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools."
        btn_content="Get started"
        url="/Driving.png"
      />
    </div>
  );
};

export default Cards;
