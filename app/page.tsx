import Navbar from "./components/Navbar";
import ComingProject from "./sections/ComingProject";
import Hero from "./sections/Hero";
import MissionCompleted from "./sections/MissionCompleted";
import Process from "./sections/Process";
import WhatWeDo from "./sections/WhatWeDo";

export default function Home() {
  return (
    <>
      <header className="m-0 p-0 w-full">
        <Navbar />
        <Hero />
      </header>
      <main className="m-0 p-0 w-full">
        <ComingProject />
        <WhatWeDo />
        <Process />
        <MissionCompleted />
      </main>
    </>
  );
}
