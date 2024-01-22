"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center my-5 py-5 mx-0 AboutUs">
      <div className="w-full">
        <h1 className="text-2xl text-center font-bold">Kita-kita</h1>
        <div className="flex justify-center items-center mt-3">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            className="mySwiper py-[30px]"
          >
            <SwiperSlide>
              <div className="card w-full">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card w-full">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card w-full">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card w-full">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-[320px] md:w-[760px] lg:w-[900px] xl:w-[1200px] mt-5">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-end">
            <Image src="/nongski-text.png" width={425} height={155} alt="Nongski" />
            <p className="p-5 max-w-[525px] text-sm">
              Bukan komunitas apalagi organisasi, kami cuma sekumpulan teman
              main yang senang main bersama tapi ingin bermanfaat juga untuk
              orang lain. Akhirnya terbentuklah nongski ini, nongski hanyalah
              sebuah nama yang dibuat mendadak oleh salah satu crew, sebenarnya
              apapun nama nya yang penting di dalamnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
