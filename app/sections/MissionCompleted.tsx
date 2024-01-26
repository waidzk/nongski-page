"use client";
import completedMissions from "../data/completed.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const MissionCompleted = () => {
  const data = completedMissions.missions.slice().reverse()
  return (
    <section className="w-full flex justify-center items-center my-5 py-5 Missions">
      <div className="w-full md:w-[760px] lg:w-[900px] xl:w-[1200px]">
        <h1 className="text-2xl text-center font-bold">Mission Completed</h1>
        <div className="flex justify-center items-center mt-3">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            className="mySwiper flex flex-row-reverse justify-center items-center"
          >
            {data.map((mission) => (
              <SwiperSlide key={mission.id}>
                <div className="card w-full">
                  <div className="image transition-all duration-75 ease-in-out">
                    <img
                      src={mission.image_url}
                      className="w-full object-cover rounded-md"
                      alt="latar"
                    />
                  </div>
                  <div className="card-body mt-1">
                    <h2 className="text-xl title">{mission.place_name}</h2>
                    <div className="description">
                      <p className="text-sm">
                        {mission.description}
                      </p>
                      <p className="text-xs text-slate-300">{mission.date}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MissionCompleted;
