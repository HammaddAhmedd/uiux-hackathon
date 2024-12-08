import React from 'react'

const top = () => {
  return (
    <div className='w-[1440px] h-[124px] flex font-bold justify-center justify-between pl-[300px] pr-[300px] items-center'>
      <a className="mr-5 hover:text-green-500" href='/'>Home</a>
      <a className="mr-5 hover:text-green-500" href='/category'>Category</a>
      <a className="mr-5 hover:text-green-500" href='/dashboard'>Dashboard</a>
      <a className="mr-5 hover:text-green-500" href='/contack'>Contack</a>
    </div>
  )
}

export default top
