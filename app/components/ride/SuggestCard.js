import Image from "next/image";

const SuggestCard = ({ title, content, btn_cnt, url }) => {
  return (
    <div className="flex flex-row mx-4 my-4 bg-gray-200 rounded-xl">
      <div className="px-4 py-4">
        <h2 className="font-bold pb-1 text-[18px]">{title}</h2>
        <p>{content}</p>
        <button>{btn_cnt}</button>
      </div>
      <div>
        <Image
          src={url}
          alt="image"
          width={100}
          height={100}
          className="w-[100px] h-1/3 mr-4 mt-10"
        />
      </div>
    </div>
  );
};

export default SuggestCard;
