import Image from "next/image";
const CompanyInfoCard = ({ url, title, content, btn_content }) => {
  return (
    <div className="mb-10">
      <Image
        src={url}
        alt="image"
        width={28}
        height={28}
        className="h-full w-full"
      />
      <h1 className="text-[18px] font-mono my-5">{title}</h1>
      <p className="text-[15px] mb-8">{content}</p>
      <button className="border-b-2 border-gray-200 ">{btn_content}</button>
    </div>
  );
};

export default CompanyInfoCard;
