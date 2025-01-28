import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import Button from './button';

const card = ({title, cartype, price, src, alt, persons, petrol}:{title: string, cartype: string, price:any, src:any, alt:any, persons:any, petrol:any}) => {

  return (
    <div className='w-[327px] h-[240px] bg-[#FFFFFF] flex flex-col justify-between py-[10px] px-[10px] border border-transparent rounded 
    lg:w-[304px] lg:h-[388px] lg:pb-[30px] lg:pt-[20px]'>

      <div className='w-[291px] h-[38px] flex justify-between lg:w-[275px]'>


        <div className='w-[96px] h-[38px] flex flex-col justify-between'>

          <div className='w-[96px] h-[20px]'>
            <h3 className='text-[16px] font-bold'>{title}</h3>
          </div>

          <div className='w-[96px] h-[14px]'>
            <p className='text-[12px] text-[#90A3BF]'>{cartype}</p>
          </div>

        </div>

        <div className='w-[16px] h-[16px]'><i className="bi bi-heart"></i></div>


      </div>


      <div className='w-[291px] h-[74px] flex justify-between 
      lg:items-center lg:flex-col lg: lg:h-[150px]'>

        <div className='w-[160px] h-[64px]'>
          <Image src={src} alt={alt} width={160} height={64}/>
        </div>

        <div className='w-[70px] h-[74px] flex flex-col justify-between lg:flex-row lg:w-[256px] lg:h-[24px]'>

          <div className='w-[40px] h-[14px] flex items-center justify-between '>
            <i className="bi text-[#90A3BF] bi-fuel-pump-fill"></i>
            <p className='text-[12px] text-[#90A3BF]'>{petrol}</p>
          </div>

          <div className='w-[60px] h-[14px] flex justify-between items-center '>
            <i className="bi text-[#90A3BF] bi-gear-wide"></i>
            <p className='text-[12px] text-[#90A3BF]'>Manual</p>
          </div>

          <div className='w-[65px] h-[14px] flex justify-between items-center '>
            <i className="bi text-[#90A3BF] bi-people-fill"></i>
            <p className='text-[12px] text-[#90A3BF]'>{persons}</p>
          </div>

        </div>

      </div>


      <div className='w-[291px] h-[36px] flex justify-between lg:w-[275px]'>

        <div className='w-[100px] h-[36px] flex items-center gap-[3px] justify-center'>
          <h3 className='text-[16px] font-bold'>{price}</h3>
          <p className='text-[12px] text-[#90A3BF]'>day</p>
        </div>

        <div>
         <Button button='Rental Now'/>
        </div>

      </div>
    </div>
  )
}

export default card
