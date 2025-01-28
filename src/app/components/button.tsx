import React from 'react'

const button = ({button}:{button:string}) => {

  return (
    <div>
      <button className='w-[100px] h-[36px] text-[#FFFFFF] text-[12px] border border-transparent 
      rounded bg-[#3563E9] hover:bg-[#3563E9] active:bg-[#1A37A7] lg:w-[116px] lg:h-[44px]'>
            {button}
          </button>
    </div>
  )
}

export default button
