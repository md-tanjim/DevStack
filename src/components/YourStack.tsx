import type { Dispatch, SetStateAction } from "react";
import type { mainType } from "../types/mainType";
import { RxCross1 } from "react-icons/rx";


interface IYourStack {
    selectedStack: mainType,
    yourStack: mainType[],
    setYourStack: Dispatch<SetStateAction<mainType[]>>,
}

const YourStack = ({ selectedStack, yourStack, setYourStack }: IYourStack) => {

    console.log(selectedStack.name);
    return (
        <div className="flex items-center justify-between border rounded-xl p-5 w-[300px] max-h-18 bg-white border-2 border-amber-300">
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


                }}
                className=""> <RxCross1 /></button>
        </div>
    );
};

export default YourStack;