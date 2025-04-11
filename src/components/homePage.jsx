import React, { useState } from 'react'
import Coin from "/coin.png"
import Hamster from '/ham.png'
import HourModal from './hourModal'
import TabModal from './tabModal'
import vector from '/Vector.svg'
const homePage = () => {
    const [counter, setCounter] = useState(2999)

    const [hourModal, setHourModal] = useState(false)
    const [tabModal, setTabModal] = useState(false)

    const showHourModal = () => {
        setHourModal(true)
        setTabModal(false)
    };
    const closeHourModal = () =>{
        setHourModal(false)
    };
    const showTabModal = () =>{
        setTabModal(true)
        setHourModal(false)
    };
    const closeTabModal = () => {
        setTabModal(false)
    };
  return (
    <>
        <div className='w-[33%] justify-center bg-[#2C2F35] h-[900px] p-5 rounded-[40px] ml-[33%] reltive'>
            <div className='flex justify-between'>
            <div
                onClick={showTabModal}
             className='w-[157px] h-[70px] flex flex-col rounded-10 bg-[#32363C] cursor-pointer'>
                <h2 className='text-[#F79841] font-medium text-center mt-3'>Earn per tap</h2>
                <p className='text-white font-medium text-center flex ml-[50px]'><img className="w-5 h-5"  src={Coin} alt="coin" />+12</p>
            </div>
            <div className='w-[157px] h-[70px] rounded-3 bg-[#32363C]'>
                <h2 className='text-[#6F72E2] font-medium text-center mt-3'>Coins to level up</h2>
                <p className='text-white font-medium text-center'>10 M</p>
            </div>
            <div 
            onClick={showHourModal}
            className='w-[157px] h-[70px] rounded-3 bg-[#32363C] cursor-pointer'>
                <h2 className='text-[#84CB69] font-medium text-center mt-3'>Profit per hour</h2>
                <p className='text-white flex font-medium text-center ml-[40px]'><img className="w-5 h-5"  src={Coin} alt="coin" />+636</p>
            </div>
            </div>

            <div>
                <h1 className='flex text-white font-bold text-center mt-[70px] text-[40px] ml-[150px]'><img className="w-[50px] h-[50px]"  src={Coin} alt="coin" />{counter}</h1>
                <button onClick={() => setCounter(counter + 1)} className='w-[372px] h-[372px] rounded-[50%] bg-[#35389E] border-[#1C2848] border-[10px] ml-[60px] mt-[100px]'><img className='ml-[90px]' src={Hamster} alt="hamster" /></button>
            </div>



            <div className='flex justify-between mt-[50px]'>
                <div className='font-bold text-white flex gap-2'><img src={vector} alt="vector" />6500/6500</div>
                <div className='font-bold text-white'>Boost</div>
            </div>
            {hourModal && <HourModal closeHourModal={closeHourModal}/>}
            {tabModal && <TabModal closeTabModal={closeTabModal}/>}
        </div>  
        
    </>
  )
}

export default homePage