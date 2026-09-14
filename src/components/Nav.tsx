import logo from "../assets/logo-text.png";
import ham from "../assets/hamburger.png";
import { useState } from "react";


const Nav = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-sm sticky top-0 z-50 backdrop-blur-md">
   <nav className=" px-5 py-4 container mx-auto">

      <div className="flex items-center justify-between">


        <img
          onClick={() => setOpen(true)} className="w-6 md:hidden"
          src={ham} alt=""
        />

        <img className="h-10" src={logo} alt=""/>


        <div >

        <ul className="hidden md:flex gap-8 font-medium text-gray-500">
          <li className="text-[#d91b7e]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        </div>


        <div className="flex items-center gap-3">
          <button className="">Sign In</button>
 <button className="bg-[#d91b7e] text-white px-4 py-2 rounded-full">Sign Up</button>
        </div>

      </div>

        { open ? (
    <div>
    <ul className="md:hidden flex flex-col gap-3 mt-4">
      <li className="text-[#d91b7e]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
    </ul>

    </div> ) : ""
}


    </nav>
    </div>
  );
};

export default Nav;
