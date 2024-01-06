import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center mt-2 h-[calc(100vh-100px)]">
      <div className="w-[320px] md:w-[760px] lg:w-[900px] xl:w-[1200px] flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-row items-center gap-3">
          <h1 className="text-6xl font-bold w-fit">Never Stop</h1>
          <img
            src="/img/hero-1.png"
            alt="hero image"
            className="w-[150px] md:w-[380px] h-[100px] object-cover rounded-tl-[100px] rounded-br-[100px] rounded-bl-[30px] rounded-tr-[30px]"
          />
        </div>
        <div className="flex flex-row items-center gap-3">
          <img
            src="/img/hero-2.png"
            alt="hero image"
            className="w-[150px] md:w-[380px] h-[100px] object-cover rounded-tl-[30px] rounded-br-[30px] rounded-bl-[100px] rounded-tr-[100px]"
          />
          <h1 className="text-6xl font-bold text-[#FF0000]">Being Kind</h1>
        </div>
        <p className="mt-4">#BanyakNongskiBanyakPahala</p>
        <div className="flex flex-row justify-center gap-8">
          <div className="flex flex-col items-center font-bold">
            <Image
              src="/icons/volunteer-icon.svg"
              alt="icon"
              width={50}
              height={50}
            />
            <p>
              <span className="text-[#FF0000]">20+</span> Volunteers
            </p>
          </div>
          <div className="flex flex-col items-center font-bold">
            <Image
              src="/icons/donation-icon.svg"
              alt="icon"
              width={50}
              height={50}
            />
            <p>
              <span className="text-[#FF0000]">100+</span> Donations
            </p>
          </div>
        </div>
        <button className="w-full md:w-96 text-white bg-[#FF0000] p-3 rounded-full">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
