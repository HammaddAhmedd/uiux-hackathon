import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div className='w-[1440px] h-[124px] flex items-center border border-[#C3D4E966] border-[1px] pl-[50px] gap-[925px]'>
      <div className='w-[148px] h-[44px] flex gap-[150px]'>
        <h1 className='text-[32px] text-[#3563E9] font-bold'>MORENT</h1>
      
        <div className='w-[492px] h-[44px] flex items-center justify-center border border-[1px] rounded bg-transparent gap-[35px]'>
          <div className='pl-[10px]'><i className="bi bi-search"></i></div>
          <textarea className='w-[492px] h-[30px] flex items-center justify-center text-[14px]'
          placeholder='Search something here'>
          </textarea>
          <div className='pr-[10px]'><i className="bi bi-toggles2"></i></div>
        </div>
      </div>

      <div className='w-[236px] h-[44px]'>
        <div className='flex flex gap-[35px] justify-between items-center pr-[5px] pl-[5px]'>
          <i className="bi text-[#596780] bi-heart-fill"></i>
          <i className="bi bi-bell-fill text-[#596780]"></i>
          <i className="bi bi-gear-fill text-[#596780]"></i>
          <div className=''><Image src='header.svg' alt='Image' width={44} height={44} /></div></div>
        </div>
      </div>
  )
}

export default header
