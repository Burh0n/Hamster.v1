import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import  meme from '/meme.svg'
import coin from '/coin.png'
import x10 from '/x10.svg'
const hourModal = ({ closeHourModal }) => {
    return (
        <div className=" text-white w-[400px] absolute top-[300px] left-auto right-auto p-5 bg-[#2C2F35] border shadow-sky-300 rounded-xl">
            <div className="bg-[#32363C] p-2 rounded-xl">
                <div className="flex ml-[30px] gap-6">
                    <div className="p-2">
                        <img src={meme} alt="meme" />
                    </div>
                    <div>
                        <h1>Тоp 10 cmc pairs</h1>
                        <p className="text-[#FFFFFF]">Profit per hour</p>
                        <p className="flex"><img className="w-5 h-5" src={coin} alt="coin" />120</p>
                    </div>
                </div>
                <div className="flex gap-[37px] ml-[50px] mt-[20px]">
                    <div>
                        <h1>Lvl 1</h1>
                    </div>
                    <div>
                        <h1 className="flex"><img className="w-5 h-5" src={coin} alt="coin" />192</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#32363C] p-2 rounded-xl mt-5">
                <div className="flex ml-[30px] gap-6">
                    <div className="p-2">
                        <img className="w-[50px] mt-[30px]" src={x10} alt="meme" />
                    </div>
                    <div>
                        <h1>Mene coins</h1>
                        <p className="text-[#FFFFFF]">Profit per hour</p>
                        <p className="flex"><img className="w-5 h-5" src={coin} alt="coin" />376</p>
                    </div>
                </div>
                <div className="flex gap-[37px] ml-[50px] mt-[20px]">
                    <div>
                        <h1>Lvl 1</h1>
                    </div>
                    <div>
                        <h1 className="flex"><img className="w-5 h-5" src={coin} alt="coin" />2.3k</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#32363C] p-2 rounded-xl mt-5">
                <div className="flex ml-[30px] gap-6">
                    <div className="p-2">
                        <img className="w-[50px] mt-[30px]" src={x10} alt="meme" />
                    </div>
                    <div>
                        <h1>Margin trading x10</h1>
                        <p className="text-[#FFFFFF]">Profit per hour</p>
                        <p className="flex"><img className="w-5 h-5" src={coin} alt="coin" />997</p>
                    </div>
                </div>
                <div className="flex gap-[37px] ml-[50px] mt-[20px]">
                    <div>
                        <h1>Lvl 1</h1>
                    </div>
                    <div>
                        <h1 className="flex"><img className="w-5 h-5" src={coin} alt="coin" />11.2k</h1>
                    </div>
                </div>
            </div>
            <div className=" absolute z-20 top-1 right-2">
                <IoIosCloseCircle
                onClick={closeHourModal}
                className="cursor-pointer"
                size={30}
                />
            </div>
        </div>
    );
};
export default hourModal;