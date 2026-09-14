// import React from 'react';

import { use, useState } from "react";
import type { mainType } from "../types/mainType";
import ShowCards from "./ShowCards";
import YourStack from "./YourStack";
import { Bounce, toast } from "react-toastify";
// import { DiVim } from "react-icons/di";


interface Itechnology{
    stackPromise : Promise<mainType[]>
}


const Technology = ({stackPromise} : Itechnology)=> {


    const stacks = use(stackPromise);

    //state for yourStack
    const [yourStack,setYourStack] = useState<mainType[]>([]);
    
    //state for button addtostack
   const [selected, setSelected] = useState<number[]>([]);





return (
<div className=" mx-20">
<div className=" gap-2">
 
  <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
    Explore the <span className="text-[#d91b7e]">Technologies</span>
  </h2>
  
  <p className="text-base text-slate-500 medium">
    Pick one technology per category to build your ideal stack.
  </p>
</div>

    <div className="mt-10 grid grid-cols-4 gap-4  ">
        <div className="grid col-span-3 grid-cols-3 gap-9">
            {
        stacks.map((stack) => {
           return <ShowCards 
           key={stack.id} 
           stack={stack}
           yourStack = {yourStack}
           setYourStack = {setYourStack}
           selected = {selected}
           setSelected = {setSelected}
           ></ShowCards>
        })
    }
        </div>
        <div className={`col-span-1 ml-8 w-75 min-h-50 border border-gray-300 rounded-xl self-start`}>
        <h1 className="font-medium text-lg mt-4 ml-5">Your Stacks</h1>
            {/* <p className="text-[16px] text-gray-400 mt-2">{yourStack.length} Technologies Selected</p> */}
        

        {
            yourStack.length<=0 ? <p className="text-[16px] text-gray-400 ml-5 mt ">No technologies selected yet</p> 
            : <p className="text-[16px] text-gray-400 ml-5 mt">{yourStack.length} Technologies Selected</p>
        }

        <div className="mt-1  ">

        {
         yourStack.length<=0 ? <div className=" border-2 border-dashed border-gray-300 rounded-2xl min-h-20 max-w-62.5 mx-auto mt-5 px-12 py-5">Your stack is empty.</div> 
         : <div className="mt-5">{
                yourStack.map((selectedStack)=>{
                    // console.log(selectedStack.name, "this is frin technology")
                    return <YourStack
                    selectedStack = {selectedStack}
                    yourStack = {yourStack}
                    setYourStack = {setYourStack}
                    selected = {selected}
                    setSelected = {setSelected}
                    ></YourStack>
                })
                
            } 
            <div className="">
            <button 
            onClick={()=>{
                const newStack : [] = [];
                setYourStack(newStack);
                setSelected(newStack)

                toast.success(`All Stacks Removed`, {
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
            className="mx-6 mt-15 mb-5 btn w-62.5 text-red-600 font-medium text-lg border-red-300">Remove All</button>

            </div>
            </div>


        }
            
        </div>
        
        </div>
    </div>


</div>
    );
};

export default Technology;