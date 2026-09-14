import type { Dispatch, SetStateAction } from "react";
import type { mainType } from "../types/mainType";
import { RxCross1 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";


interface IYourStack {
    selectedStack: mainType,
    yourStack: mainType[],
    setYourStack: Dispatch<SetStateAction<mainType[]>>,
    selected : number[],
    setSelected : Dispatch<SetStateAction<number[]>>,
}

const YourStack = ({ selectedStack, yourStack, setYourStack, selected, setSelected }: IYourStack) => {

    console.log(selectedStack.name);
    return (
        <div>
            <div className="flex items-center justify-between rounded-xl p-5 w-62.5 max-h-18 mx-auto mt-2 bg-white border border-gray-300">
                <div className="flex items-center gap-4">
                    <img className="w-6" src={selectedStack.icon} alt="" />

                    <div>
                        <h1 className="text-xl font-medium">{selectedStack.name}</h1>
                        <p>{selectedStack.category}</p>
                    </div>

                </div>

                <button
                    onClick={() => {
                        const newStack = yourStack.filter((s) => s != selectedStack);
                        setYourStack(newStack)
                        const newSelected = selected.filter(s => s != selectedStack.id)
                        setSelected(newSelected);
                        toast.success(`${selectedStack.name} is removed`, {
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
                    className="border-2 border-[#d7cdd2] rounded-sm px-1 py-1"> <RxCross1 /></button>


            </div>

            
        </div>
    );
};

export default YourStack;