import React from 'react'

const footer = () => {
  return (
    <div className='w-[1440px] h-[480px] bg-[#FFFFFF] flex items-center justify-center flex-col'>
      <div className='w-[1320px] h-[350px] flex border-b-[1px] border-[#13131329]'>
        <div className='w-[660px] h-[244px]'>
          <div className='w-[292px] h-[108px] flex flex-col justify-between pt-[40px] pl-[30px]'>
            <h1 className='font-bold text-[#3563E9] text-[32px]'>MORENT</h1>
            <p className='text-[16px] text-[#13131399]'>
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
        </div>
        <div className='w-[660px] h-[244px] flex justify-between justify-center pr-[30px] pt-[40px] pl-[30px]'>
          <div className='w-[152px] h-[244px] flex justify-between pt-[2px] pb-[2px] flex-col'>
            <h1 className='text-[20px] font-bold'>About</h1>
            <a className='text-[#13131399] text-[16px]'href='/'>How it works</a>
            <a className='text-[#13131399] text-[16px]'href='/'>Featured</a>
            <a className='text-[#13131399] text-[16px]'href='/'>Partnership</a>
            <a className='text-[#13131399] text-[16px]'href='/'>Bussiness Relation</a>
          </div>
          <div className='w-[152px] h-[244px] flex justify-between pt-[2px] pb-[2px] flex-col'>
          <h1 className='text-[20px] font-bold'>Community</h1>
            <a className='text-[#13131399] text-[16px]' href='/'>Events</a>
            <a className='text-[#13131399] text-[16px]' href='/'>Blog</a>
            <a className='text-[#13131399] text-[16px]' href='/'>Podcast</a>
            <a className='text-[#13131399] text-[16px]' href='/'>Invite a friend</a>
          </div>
          <div className='w-[152px] h-[244px] flex justify-between pt-[2px] pb-[2px] flex-col'>
          <h1 className='text-[20px] font-bold'>Socials</h1>
            <a className='text-[#13131399] text-[16px]' href='/https://discord.com'>Discord</a>
            <a className='text-[#13131399] text-[16px]' href='/https://www.instagram.com'>Instagram</a>
            <a className='text-[#13131399] text-[16px]' href='/https://twitter.com'>Twitter</a>
            <a className='text-[#13131399] text-[16px]' href='/https://www.facebook.com'>Facebook</a>
          </div>
        </div>
      </div>
      <div className='w-[1320px] h-[24px] flex justify-between justify-center pt-[20px] '>
        <div className='w-[292px] h-[24px]'>
          <p className='text-[16px] font-bold'>©2022 MORENT. All rights reserved</p>
        </div>
        <div className='w-[350px] h-[24px] flex gap-[10px]'>
          <div>
            <a className='text-[16px] font-bold'href='/'>Privacy & Policy</a>
          </div>
          <div>
            <a className='text-[16px] font-bold'href='/'>Terms & Condition</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
