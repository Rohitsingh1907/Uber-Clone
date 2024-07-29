const Header = () => {
  return (
    <div
      className="flex flex-row justify-between bg-black text-white px-6 py-8 lg:py-20 xl:px-20 xl:py-10
    "
    >
      <div className="">
        <ul className="flex gap-5">
          <li>
            <h1 className="text-[20px] xl:text-[30px] font-bold py-2 xl:py-0 xl:pr-16">
              Uber
            </h1>
          </li>
          <li className="hidden xl:block xl:text-[20px] xl:pt-2 ">Ride</li>
          <li className="hidden xl:block xl:text-[20px] xl:pt-2 ">Drive</li>
          <li className="hidden xl:block xl:text-[20px] xl:pt-2 ">Bussiness</li>
          <li className="hidden xl:block xl:text-[20px] xl:pt-2">About</li>
        </ul>
      </div>
      <div className="">
        <ul className="flex gap-3">
          <li className="hidden xl:block xl:text-[20px] xl:pt-2  xl:pl-4">
            en
          </li>
          <li className="hidden xl:block xl:text-[20px] xl:pt-2  xl:pl-4">
            Help
          </li>
          <li className="py-2 xl:font-bold xl:pl-4">LogIn</li>
          <li className="border-white px-4 py-2 bg-white text-black rounded-3xl xl:font-bold xl:px-8 xl:py-4 xl:ml-4">
            SignUp
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
