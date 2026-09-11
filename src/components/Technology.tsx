// import React from 'react';

import { use, useState } from "react";
import type { mainType } from "../types/mainType";
import ShowCards from "./ShowCards";
import YourStack from "./YourStack";


interface Itechnology{
    stackPromise : Promise<mainType[]>
}


const Technology = ({stackPromise} : Itechnology)=> {


    const stacks = use(stackPromise);

    //state for yourStack
    const [yourStack,setYourStack] = useState<mainType[]>([]);
    





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
           ></ShowCards>
        })
    }
        </div>
        <div className="col-span-1 ml-8">
        <h1>your stacks</h1>
        <p>{yourStack.length} Technologies Selected</p>

        <div className="mt-14">
            {
                yourStack.map((selectedStack)=>{
                    // console.log(selectedStack.name, "this is frin technology")
                    return <YourStack
                    selectedStack = {selectedStack}
                    setYourStack = {setYourStack}
                    ></YourStack>
                })
            }
        </div>
        
        </div>
    </div>


</div>
    );
};

export default Technology;