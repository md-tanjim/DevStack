// import React from 'react';

import { type Dispatch, type SetStateAction } from "react";
import type { mainType } from "../types/mainType";
import { Bounce, toast } from "react-toastify";


interface IShowCards{
    stack : mainType,
    yourStack : mainType[],
    setYourStack : Dispatch<SetStateAction<mainType[]>>,
    selected : number[],
    setSelected : Dispatch<SetStateAction<number[]>>,
}


const ShowCards = ({stack, yourStack, setYourStack, selected, setSelected}: IShowCards) => {
   console.log(stack, "this is stacks")
   console.log(yourStack, "this is stacks")


   

    return (    

        <div className="w-75 p-6 border shadow-2xl border-gray-300 rounded-3xl">
      <div className="flex justify-between">
        <img src={stack.icon} alt="" className="w-10" />
        
      <span className="inline-bock flex items-center max-h-8 px-5 py-1.5 text-sky-500 bg-sky-50 border border-sky-100 rounded-full text-sm font-medium">
  {stack.badge}
</span>
      </div>

      <h2 className="font-bold mt-6 text-lg">{stack.name}</h2>
      <p className="text-sm text-gray-500 font-medium mt-3">{stack.description}</p>

      <div className="flex justify-between mt-3">
        <span className=" inline-bock flex items-center max-h-6 px-1.5 py-1 text-gray-500 bg-gray-50 border border-gray-100 rounded-xs text-sm ">{stack.category}</span>
        <span className="inline-bock flex items-center max-h-6 px-1.5 py-1 text-gray-500 bg-gray-50 border border-gray-100 rounded-xs text-sm ">{stack.difficulty}</span>
        <span>⭐ {stack.rating}</span>
      </div>

      <button 
      onClick={()=> {
        if(!yourStack.includes(stack)){

          setYourStack([...yourStack,stack]);
          setSelected([...selected,stack.id]);
          toast(`${stack.name} is added successfully`)


        }
        else
        toast.error(`${stack.name} is already added`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
      


      }}
      // disabled={selected}
      // disabled={yourStack.includes(stack =>{
      //   return (

      //    stack ?  'bg-[#b8bed0] text-white cursor-not-allowed'
      //     : 'bg-[#0A0F1D] text-white border-gray-200 '
      //   ) 
      // })}
      className={`btn btn-wide rounded-lg mt-3 

        

      ${selected.includes(stack.id) 
      ?  'bg-[#b8bed0] text-white cursor-not-allowed'
      : 'bg-[#0A0F1D] text-white border-gray-200 '
    }
      
      `} >{selected.includes(stack.id) ? "✓ Added to Stack" : "Add To Stack"}</button>
    </div>



    );
};

export default ShowCards;