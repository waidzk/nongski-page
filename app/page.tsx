import Navbar from "./components/Navbar";
import ComingProject from "./sections/ComingProject";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <>
      <header className="m-0 p-0 w-full">
        <Navbar />
        <Hero />
      </header>
      <main className="m-0 p-0 w-full">
        <ComingProject />
      </main>
    </>
  );
}
