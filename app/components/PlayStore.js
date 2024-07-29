const PlayStore = () => {
  return (
    <div className="py-10 px-5 bg-gray-50 xl:px-10">
      <h1 className="text-[25px] font-bold my-10 xl:text-[35px] xl:px-20">
        It's easier in the apps
      </h1>

      <div className="xl:flex xl:flex-row xl:gap-5 xl:px-20">
        <div className="border-gray-10 border-2  my-15 px-2 py-5 flex flex-row font-bold bg-white xl:gap-10 xl:text-[30px] xl:items-center xl:px-10">
          <div className="text-white bg-black p-5 rounded-2xl mr-2">Uber</div>
          <p className="text-[20px] pl-2 xl:text-[30px]">
            Download the Uber app
          </p>
        </div>

        <div className="border-gray-10 border-2  my-15 px-2 py-5 flex flex-row font-bold bg-white xl:gap-10 xl:text-[30px] xl:items-center xl:px-10">
          <div className="text-white bg-black p-5 rounded-2xl mr-2">Uber</div>
          <p className="text-[20px] pl-2 xl:text-[30px]">
            Download the Driver app
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayStore;
