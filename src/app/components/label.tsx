import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const label = () => {
  return (
    <div className='w-[1440px] h-[141px] flex justify-center items-center justify-between bg-[#FFFFFF] pr-[50px] pl-[50px]'>
      <div className='w-[572px] h-[40px] flex justify-center gap-[4px] items-center'>
      <i className="bi bi-command text-[#7C5CFC]"></i>
      <h1 className='text-[32px] font-bold'>High Fidelity Dashboard - Detail Car</h1>
      </div>
      <div className='w-[236px] h-[25px] flex justify-center items-center gap-[8px]'>
        <p className='text-[12px] text-[#666666]'>Last Updated:</p>
        <p className='text-[12px] font-bold'>8 Aug 2022</p>
      </div>
    </div>
  )
}

export default label
