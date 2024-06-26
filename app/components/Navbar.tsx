"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuMobileOpen, setMenuMobileOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center mt-2">
      <div className="w-[320px] md:w-[760px] lg:w-[900px] xl:w-[1200px] flex justify-between items-center">
        <div className="logo">
          <Image
            src="/logo-nongski.png"
            alt="logo nongski"
            width={80}
            height={80}
          />
        </div>
        <ul className="hidden md:flex gap-6 transition-all duration-100 ease-in-out">
          <li>
            <a className="hover:text-[#FF0404]" href="#Project">Project</a>
          </li>
          <li>
            <a className="hover:text-[#FF0404]" href="#CompletedMissions">Completed</a>
          </li>
          <li>
            <a className="hover:text-[#FF0404]" href="#AboutUs">About us</a>
          </li>
        </ul>
        <a href="https://bit.ly/nongski" target="_blank" className="">
          <div className="hidden md:block text-white bg-[#FF0404] rounded-b-full -mt-16 pt-[92px] pb-8 px-2 transition-all ease-in-out duration-100 hover:pt-[100px]">
            Donasi
          </div>
        </a>
        {/* MOBILE NAVIGATION */}
        <div className="md:hidden">
          <div className="mobile block">
            <Image
              src="/icons/menu-deep.svg"
              alt="menu mobile icon"
              width={30}
              height={30}
              onClick={() => setMenuMobileOpen(!isMenuMobileOpen)}
            />
          </div>
          <div
            className={`flex justify-end text-right items-center fixed right-0 top-[70px] h-screen w-[320px] bg-[#FF0404] rounded-tl-full transition-all ease-in-out duration-100 ${isMenuMobileOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <ul className="mr-10 flex flex-col gap-4 text-2xl font-bold text-white underline">
              <li>
                <a onClick={() => setMenuMobileOpen(false)} href="#Project">Project</a>
              </li>
              <li>
                <a onClick={() => setMenuMobileOpen(false)} href="#CompletedMissions">Completed</a>
              </li>
              <li>
                <a onClick={() => setMenuMobileOpen(false)} href="#AboutUs">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
