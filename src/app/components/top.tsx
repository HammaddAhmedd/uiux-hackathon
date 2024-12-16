import React from 'react'

const top = () => {
  return (
    <div className='min-h-[100px]'>
      <div className='container max-auto flex justify-center font-bold justify-between'>
        <div>
          <a className="mr-5 hover:text-green-500" href='/'>Home</a>
          <a className="mr-5 hover:text-green-500" href='/category'>Category</a>
          <a className="mr-5 hover:text-green-500" href='/dashboard'>Dashboard</a>
          <a className="mr-5 hover:text-green-500" href='/contack'>Contack</a>
        </div>
      </div>
    </div>
  )
}

export default top
