const Footer = () => {
  return (
    <div className="px-10 text-white bg-black ">
      <div className="my-5 py-5 xl:px-24 xl:mb-24 xl:pt-16">
        <h1 className="text-[25px] mb-3">Uber</h1>
        <h2 className="text-[20px]">Visit Help Center</h2>
      </div>

      <div className="lg:flex lg:flex-row xl:flex xl:flex-row xl:justify-between xl:px-24">
        <div className="mb-10">
          <h2 className="font-bold mb-5 text-[18px]">Company</h2>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Our offerings</li>
            <li className="mb-2">Newsroom</li>
            <li className="mb-2">Investors</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2">Careers</li>
            <li className="mb-2">Uber AI</li>
            <li className="mb-2">Gift cards</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="font-bold mb-5 text-[18px]">Products</h2>
          <ul>
            <li className="mb-2">Ride</li>
            <li className="mb-2">Drive</li>
            <li className="mb-2">Deliver</li>
            <li className="mb-2">Eat</li>
            <li className="mb-2">Uber for Business</li>
            <li className="mb-2">Uber Frieght</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="font-bold mb-5 text-[18px]">Global Citizenship</h2>
          <ul>
            <li className="mb-2">Safety</li>
            <li className="mb-2">Diversity and Inclusion</li>
            <li className="mb-2">Sustainablity</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="font-bold mb-5 text-[18px]">Travel</h2>
          <ul>
            <li className="mb-2">Reserve</li>
            <li className="mb-2">Airports</li>
            <li className="mb-2">Cities</li>
          </ul>
        </div>
      </div>

      <div className="xl:flex xl:flex-row justify-between xl:px-24">
        <div className="mb-10">
          <ul className="flex flex-row gap-2 xl:gap-10">
            <li className="mb-2">Fa</li>
            <li className="mb-2">Tw</li>
            <li className="mb-2">Yo</li>
            <li className="mb-2">Li</li>
            <li className="mb-2">In</li>
          </ul>
        </div>

        <div className="mb-10">
          <ul className="xl:flex flex-row gap-5">
            <li className="mb-2">English</li>
            <li className="mb-2">Mumbai</li>
          </ul>
        </div>
      </div>

      <div className="mb-10 flex flex-row gap-3 xl:px-24">
        <p>Playstore</p>
        <p>App store</p>
      </div>

      <div className="xl:flex xl:flex-row xl:justify-between xl:px-24">
        <h3 className="mb-10">2024 Uber Technologies Inc.</h3>

        <div className="pb-10">
          <ul className="flex flex-row gap-3 text-[12px]">
            <li>Privacy</li>
            <li>Accessebility</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
