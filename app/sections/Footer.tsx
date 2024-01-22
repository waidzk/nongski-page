import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full flex justify-center items-center mt-10">
      <div className="w-full flex flex-col md:flex-row gap-5 justify-between items-start md:items-center bg-[#DE0000] p-8 md:p-24">
        <div>
          <h1 className="text-5xl font-bold italic text-slate-100 max-w-[500px]">
            Trying spread kind since 2020
          </h1>
          <span className="text-slate-200 text-xs">
            &copy; 2024 by <a href="https://waidzk.vercel.app">wdzdev</a>
          </span>
        </div>
        <div className="text-slate-100">
            <h3>Getting Touch</h3>
            <ul className="mt-2 flex flex-col gap-1">
                <li><a href="">nongski.nsbk@gmail.com</a></li>
                <li><a href="">@nongski_nsbk</a></li>
                <li><a href="">@nongski_crew</a></li>
                <li><a href="">0856-1594-803</a></li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
