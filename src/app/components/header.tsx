import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div className='w-[1440px] h-[180px] flex flex-col border border-[#C3D4E966] border-[1px]'>
    <div className='w-[1440px] h-[100px] py-[35px] flex items-center pl-[50px] gap-[350px]'>
      <div className='w-5/8 h-[44px] flex gap-[150px]'>
        <h1 className='w-1/6 text-[32px] text-[#3563E9] font-bold'>MORENT</h1>
      
        <div className='w-[492px] h-[44px] flex items-center justify-center border border-[1px] rounded bg-transparent gap-[35px]'>
          <div className='pl-[10px]'><i className="bi bi-search"></i></div>
          <textarea className='w-[492px] h-[30px] flex items-center justify-center text-[14px]'
          placeholder='Search something here'>
          </textarea>
          <div className='pr-[10px]'><i className="bi bi-toggles2"></i></div>
        </div>
      </div>

      <div className='w-3/8 h-[44px]'>
        <div className='flex flex gap-[35px] items-center pr-[5px] pl-[5px]'>
          <i className="bi text-[#596780] bi-heart-fill"></i>
          <i className="bi bi-bell-fill text-[#596780]"></i>
          <i className="bi bi-gear-fill text-[#596780]"></i>
          <div className=''><Image src='header.svg' alt='Image' width={44} height={44} /></div></div>
        </div>
      </div>

      <div className='w-[1440px] h-[60px] flex bg-[#FFFFFF] items-center justify-center'>
      <div className='w-[800px] h-[50px] text-[#90A3BF] font-bold bg-[#F6F7F9] px-[20px] flex justify-center 
      items-center justify-between'>
        <a className="hover:text-black" href='/'>Home</a>
        <a className="hover:text-black" href='/category'>Category</a>
        <a className="hover:text-black" href='/dashboard'>Dashboard</a>
        <a className="hover:text-black" href='/contack'>Contack</a>
      </div>
    </div>

    </div>
  )
}

export default header
