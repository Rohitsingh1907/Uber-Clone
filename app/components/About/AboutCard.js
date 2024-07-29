import Image from "next/image";
const AboutCard = ({ url, title, content, btn_content }) => {
  return (
    <div>
      <Image
        src={url}
        alt="image"
        width={28}
        height={28}
        className="w-full h-full"
      />
      <h1 className="text-[25px] py-5 font-bold">{title}</h1>
      <p className="pb-5">{content}</p>
      <button className="border-b-2 border-gray-100 mb-10">
        {btn_content}
      </button>
    </div>
  );
};

export default AboutCard;
