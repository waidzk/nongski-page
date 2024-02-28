import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="w-full flex justify-center items-center my-5 py-5">
      <div className="w-[320px] md:w-[760px] lg:w-[900px] xl:w-[1200px] flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl font-bold">What We Do</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="w-full md:w-1/2">
            <p className="w-full xl:w-[530px] text-4xl text-right font-medium">
              Mengulurkan tangan untuk anak-anak yatim & piatu dengan{" "}
              <span className="text-red-500">bermain</span> dan{" "}
              <span className="text-red-500">memberikan senyuman</span> kepada
              mereka
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-col gap-2 w-full md:w-1/2">
            <p className="text-slate-700 text-sm w-full xl:w-[500px]">
              Dengan acara yang kebanyakan dibuat untuk anak-anak, kami
              menyimpulkan bahwa anak-anak ini kelak akan meneruskan
              perjuangan kami sebagai orang yang ingin bermanfaat bagi orang
              lain. Kami harap mereka seperti itu, punya semangat juang untuk
              melakukan hal baik dimanapun dan kapanpun. Anak-anak ini akan
              menjadi pondasi-pondasi bangsa ini di masa depan dan tidak lupa
              anak-anak ini bisa menjadi kekuatan Islam di masa depan! <a href="https://bit.ly/nongski" className="text-red-500 underline">Mari
              Berdonasi!</a>
            </p>
            <Image
              src="/img/whatwedo.png"
              alt="what we do image"
              width={500}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
