"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const MissionCompleted = () => {
  return (
    <section className="w-full flex justify-center items-center my-5 py-5">
      <div className="w-[320px] md:w-[760px] lg:w-[900px] xl:w-[1200px]">
        <h1 className="text-2xl text-center font-bold">Mission Completed</h1>
        <div className="flex justify-center items-center mt-3">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
                <div className="card-body mt-1">
                  <h2 className="text-xl title">Yayasan Baitul Umassmi</h2>
                  <div className="description">
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa deserunt voluptatum autem facilis voluptate magnam
                      omnis nisi velit libero ad perspiciatis rerum, praesentium
                      explicabo neque tenetur nulla suscipit exercitationem
                      dignissimos!
                    </p>
                    <p className="text-xs text-slate-300">JUL/07/2022</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
                <div className="card-body mt-1">
                  <h2 className="text-xl title">Yayasan Baitul Umassmi</h2>
                  <div className="description">
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa deserunt voluptatum autem facilis voluptate magnam
                      omnis nisi velit libero ad perspiciatis rerum, praesentium
                      explicabo neque tenetur nulla suscipit exercitationem
                      dignissimos!
                    </p>
                    <p className="text-xs text-slate-300">JUL/07/2022</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
                <div className="card-body mt-1">
                  <h2 className="text-xl title">Yayasan Baitul Umassmi</h2>
                  <div className="description">
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa deserunt voluptatum autem facilis voluptate magnam
                      omnis nisi velit libero ad perspiciatis rerum, praesentium
                      explicabo neque tenetur nulla suscipit exercitationem
                      dignissimos!
                    </p>
                    <p className="text-xs text-slate-300">JUL/07/2022</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
                <div className="card-body mt-1">
                  <h2 className="text-xl title">Yayasan Baitul Umassmi</h2>
                  <div className="description">
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa deserunt voluptatum autem facilis voluptate magnam
                      omnis nisi velit libero ad perspiciatis rerum, praesentium
                      explicabo neque tenetur nulla suscipit exercitationem
                      dignissimos!
                    </p>
                    <p className="text-xs text-slate-300">JUL/07/2022</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
                <div className="card-body mt-1">
                  <h2 className="text-xl title">Yayasan Baitul Umassmi</h2>
                  <div className="description">
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa deserunt voluptatum autem facilis voluptate magnam
                      omnis nisi velit libero ad perspiciatis rerum, praesentium
                      explicabo neque tenetur nulla suscipit exercitationem
                      dignissimos!
                    </p>
                    <p className="text-xs text-slate-300">JUL/07/2022</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image transition-all duration-75 ease-in-out">
                  <img
                    src="/img/mission1.jpg"
                    className="w-full object-cover rounded-md"
                    alt="latar"
                  />
                </div>
                <div className="card-body mt-1">
                  <h2 className="text-xl title">Yayasan Baitul Umassmi</h2>
                  <div className="description">
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa deserunt voluptatum autem facilis voluptate magnam
                      omnis nisi velit libero ad perspiciatis rerum, praesentium
                      explicabo neque tenetur nulla suscipit exercitationem
                      dignissimos!
                    </p>
                    <p className="text-xs text-slate-300">JUL/07/2022</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MissionCompleted;
