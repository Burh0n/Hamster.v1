import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import coin from '/coin.png'
const hourModal = ({ closeTabModal, tabModalLogic }) => {
    return (
        <div className=" text-white w-[400px] absolute top-[300px] left-auto right-auto p-10 bg-[#2C2F35] border shadow-sky-300 rounded-xl">
            <div onClick={()=> tabModalLogic(2, 1000)} className="flex bg-[#32363C] rounded-2xl h-[20px] gap-[20px] mt-5" >
                <h1>1 lvl</h1>
                <h1 className="flex">+2 <img src={coin} alt="coin" /></h1>
                <h1 className="flex">-1000 <img src={coin} alt="coin" /></h1>
            </div>
            <div onClick={()=> tabModalLogic(4, 2000)} className="flex bg-[#32363C] rounded-2xl h-[20px] gap-[20px] mt-5" >
                <h1>2 lvl</h1>
                <h1 className="flex">+4 <img src={coin} alt="coin" /></h1>
                <h1 className="flex">-2000 <img src={coin} alt="coin" /></h1>
            </div>
            <div onClick={()=> tabModalLogic(8, 3000)} className="flex bg-[#32363C] rounded-2xl h-[20px] gap-[20px] mt-5" >
                <h1>2 lvl</h1>
                <h1 className="flex">+8 <img src={coin} alt="coin" /></h1>
                <h1 className="flex">-3000 <img src={coin} alt="coin" /></h1>
            </div>
            <div className=" absolute z-20 top-1 right-2">
                <IoIosCloseCircle
                onClick={closeTabModal}
                className="cursor-pointer"
                size={30}
                />
            </div>
        </div>
    );
};
export default hourModal;