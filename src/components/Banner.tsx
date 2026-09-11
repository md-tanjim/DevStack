// import React from 'react';
import ban from "../assets/banner-stack.png";

const Banner = () => {
    return (

<div className="flex justify-between items-center px-22 pt-10">


  <div className="max-w-xl">

    <h1 className="text-6xl font-bold text-black-900 ">
      Build Your Ideal
      <br />
      <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Development Stack
      </span>
    </h1>

    <p className="mt-8 text-xl text-black-500">
      Explore frontend, backend, database, and tooling options,
      compare them side by side, and put together the stack that
      fits your next project.
    </p>

    <div className="flex gap-5 mt-10">

      <button className="rounded-xl text-white font-semibold
       bg-linear-to-r from-orange-500 to-pink-500 px-8 py-4">
        Explore Technologies </button>

      <button className="rounded-xl border border-gray-300
        text-black-600 px-8 py-4 font-semibold">
        Learn More</button>

    </div>

  </div>

  <div>
    <img className="w-[500px]" src={ban} alt="" />
  </div>

</div>




    );
};

export default Banner;