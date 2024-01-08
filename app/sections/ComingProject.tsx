import Image from "next/image";
import React from "react";
import Button from "../components/Button";

const ComingProject = () => {
  return (
    <section className="w-full flex justify-center items-center mt-2">
      <div className="w-[320px] md:w-[760px] lg:w-[900px] xl:w-[1200px] flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl font-bold">Coming Project</h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src="/img/coming.png"
            alt="Coming Image"
            className="rounded-tl-[30px] rounded-br-[30px] rounded-bl-[100px] rounded-tr-[100px]"
            width={600}
            height={600}
          />
          <div className="w-full flex flex-col gap-2 md:w-[350px]">
            <h2 className="text-5xl font-semibold">
              Small Effort, Big Changes
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam
              esse omnis perferendis. Repudiandae quaerat vero tempore eaque
              nisi non tempora animi saepe alias natus, voluptate perspiciatis
              impedit sapiente quisquam.
            </p>
            <Button theme="secondary" title="Donasi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingProject;
