import React from 'react'

const Process = () => {
  return (
    <section className="w-full flex justify-center items-center mt-10">
      <div className="w-[320px] md:w-[760px] lg:w-[900px] xl:w-[1200px] flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl text-center font-bold">Process of build a our project</h1>
        <div className="cards-process flex md:flex-row flex-col justify-center nunito">
            <div className="card-process bg-red-600 md:w-56 w-full p-4 m-2 md:rounded-t-full md:rounded-b-lg rounded-l-full rounded-r-lg flex items-center md:flex-col flex-row">
                <div className="number-of-process bg-white md:w-48 md:h-48 w-24 h-24 rounded-full p-8 flex justify-center items-center">
                    <h2 className="text-5xl font-bold text-red-600">1</h2>
                </div>
                <div className="description p-1">
                    <h3 className="md:text-2xl text-lg font-bold text-white">Mengumpulkan Donasi</h3>
                    <p className="md:text-base text-sm text-white">Mengumpulkan donasi berupa uang dari internal Nongski maupun dari luar. <a className="font-bold underline" href="https://bit.ly/3sQK07C">Mari Berdonasi!</a></p>
                </div> 
            </div>

            <div className="card-process bg-red-600 md:w-56 w-full p-4 m-2 md:rounded-b-full md:rounded-t-lg rounded-r-full rounded-l-lg flex items-center md:flex-col flex-row">
                <div className="description p-1">
                    <h3 className="md:text-2xl text-lg font-bold text-white">Menyusun Rencana</h3>
                    <p className="md:text-base text-sm text-white">Merencanakan segala rencana yang akan dijalani pada saat acara dimulai, walaupun acara-nya main - main.</p>
                </div> 
                <div className="number-of-process bg-white md:w-48 md:h-48 w-24 h-24 rounded-full p-8 flex justify-center items-center">
                    <h2 className="text-5xl font-bold text-red-600">2</h2>
                </div>
            </div>

            <div className="card-process bg-red-600 md:w-56 w-full p-4 m-2 md:rounded-t-full md:rounded-b-lg rounded-l-full rounded-r-lg flex items-center md:flex-col flex-row">
                <div className="number-of-process bg-white md:w-48 md:h-48 w-24 h-24 rounded-full p-8 flex justify-center items-center">
                    <h2 className="text-5xl font-bold text-red-600">3</h2>
                </div>
                <div className="description p-1">
                    <h3 className="md:text-2xl text-lg font-bold text-white">Start the Project!</h3>
                    <p className="md:text-base text-sm text-white">Kita lebih suka menyebutnya dengan bersenang - senang!</p>
                </div> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default Process;