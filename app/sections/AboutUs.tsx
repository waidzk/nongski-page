"use client";
import Photos from "../data/album.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import Image from "next/image";

export const AboutUs = () => {
  const data = Photos.album;
  return (
    <section id="AboutUs" className="w-full flex flex-col justify-center items-center my-5 py-5 mx-0 AboutUs">
      <div className="w-full">
        <h1 className="text-2xl text-center font-bold">Kita-kita</h1>
        <div className="flex justify-center items-center mt-3">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper py-[30px]"
          >
            {data.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="card w-full">
                  <div className="image transition-all duration-75 ease-in-out">
                    <img
                      src={photo.image_url}
                      className="w-full object-cover rounded-md"
                      alt="latar"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-[320px] md:w-[760px] lg:w-[900px] xl:w-[1200px] mt-5">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-end">
            <Image
              src="/nongski-text.png"
              width={425}
              height={155}
              alt="Nongski"
            />
            <p className="p-5 max-w-[525px] text-sm">
              Bukan komunitas, kelompok, apalagi organisasi. Nongski hanyalah
              sebuah wadah untuk anak-anak muda yang senang bermain atau
              nongkrong sekaligus bermanfaat bagi orang lain. Nongski pun
              hanyalah sebuah nama yang dibuat mendadak oleh salah satu dari
              teman kami. Namun, apapun nama-nya yang penting di dalamnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
