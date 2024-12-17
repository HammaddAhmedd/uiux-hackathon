import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-[1440px] h-[900px] flex justify-between bg-[#F6F7F9]'>
      <div className='w-[286px] h-[900px] bg-[#FFFFFF] flex flex-col'>
        <div className='w-[286px] h-[900px] flex pt-[50px] pb-[50px] justify-between flex-col items-center'>
          <div className='w-[220px] h-[644px] flex flex-col justify-between'>
            <div className='w-[132px] h-[386px] flex flex-col items-center justify-between'>

              <p className='text-[12px] text-[#94A7CB66]'>M A I N  M E N U</p>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-house"></i>
                <p>Dashboard</p>
              </button>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-car-front"></i>
                <p>Car Rent</p>
              </button>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-bar-chart"></i>
                <p>Insight</p>
              </button>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-wallet"></i>
                <p>Reimburse</p>
              </button>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-chat-dots"></i>
                <p>Inbox</p>
              </button>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-calendar4-week"></i>
                <p>Calender</p>
              </button>
            </div>

            <div className='w-[150px] h-[198px] flex flex-col justify-between '>

              <p className='text-[12px] pl-[15px] text-[#94A7CB66]'>P R E F E R E N C E S</p>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-gear"></i>
                <p>Settings</p>
              </button>

              <button className='w-[200px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-info-circle"></i>
                <p>Help & Center</p>
              </button>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
              py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
              transition duration-200 flex'>
                <i className="bi bi-briefcase"></i>
                <p>Dark Mode</p>
              </button>
            </div>

          </div>

          <div className='w-[200px] h-[28px] flex flex-col gap-[42px]'>

              <button className='w-[150px] h-[35px] gap-[4px] text-[#90A3BF] border-transparent 
               py-2 px-4 rounded hover:bg-[#3563E9] hover:text-white active:bg-[#3563E9]
               transition duration-200 flex'>
               <i className="bi bi-box-arrow-left"></i>
               <p>Log Out</p>
              </button>
          </div>
          
        </div>
      </div>
      <div className='w-[1154px] h-[900px] flex justify-center gap-[25px] justify-center items-center bg-[#F6F7F9]'>
        <div className='w-[534px] h-[836px] border border-transparent rounded flex justify-center bg-[#FFFFFF]'>
          <div className='w-[486px] h-[800] flex flex-col py-[20px] justify-between'>
            <div className='w-[192px] h-[24px]'>
              <h1 className='font-bold text-[20px]'>Details Rental</h1>
            </div>
            <div className='w-[486px] h-[272px]'>
              <Image src='/maps.svg' alt='image' width={486} height={272} />
            </div>
            <div className='w-[486px] h-[72px] flex gap-[10px]'>
              <div className='w-[132px] h-[72px] bg-[#3563E9] flex items-center justify-center'>
              <Image src='/hero-image-2.svg' alt='image' width={116} height={36} />
              </div>
              <div className='w-[160px] h-[60px] flex flex-col justify-between'>
                <h1 className='text-[24px] font-bold'>Nissan GT - R</h1>
                <p className='text-[14px] text-[#3D5278]'>Sport Car</p>
              </div>
              <div className='w-[60px] h-[32px] pl-[125px]'>
                <p className='text-[14px] text-[#3D5278]'>#9761</p>
              </div>
            </div>

            <div className='w-[486px] h-[200px] flex flex-col justify-between'>
              
              <div className="w-[92px] h-[20px] flex justify-between">
                  <i className="bi bi-bullseye text-[#3563E94D]"></i>
                  <h1 className="text-['16px] font-bold">Pick - Up</h1>
                </div>
                <div className="w-[486px] h-[48px] flex justify-between">
                  <div className="w-[135px] h-[48px] flex flex-col border-r-[1px]">
                    <h1 className="text-[16px] font-bold">Locations</h1>
                    <a className="flex pr-[5px] justify-between" href="/">
                      <p className="text-[12px] text-[#90A3BF]">Kota Semarang</p>
                      <i className="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <div className="w-[145px] h-[48px] flex flex-col border-r-[1px]">
                  <h1 className="text-[16px] font-bold flex flex-col ">Date</h1>
                    <a className="flex pr-[5px] justify-between" href="/">
                      <p className="text-[12px] text-[#90A3BF]">20 July 2022</p>
                      <i className="bi bi-chevron-down"></i>
                    </a>
                  </div>
                  <div className="w-[140px] h-[48px] flex flex-col border-r-[1px]">
                  <h1 className="text-[16px] font-bold flex flex-col pr-[px]">Time</h1>
                    <a className="flex pr-[5px] justify-between" href="/">
                      <p className="text-[12px] text-[#90A3BF]">07.00</p>
                      <i className="bi bi-chevron-down"></i>
                    </a>
                  </div>
                </div>

                <div className="w-[110px] h-[20px] flex justify-between">
                <i className="bi bi-bullseye text-[#3563E94D]"></i>
                <h1 className="text-['16px] font-bold">Drop - Off</h1>
              </div>
              <div className="w-[486px] h-[48px] flex justify-between">
                <div className="w-[135px] h-[48px] flex flex-col border-r-[1px]">
                  <h1 className="text-[16px] font-bold">Locations</h1>
                  <a className="flex pr-[5px] justify-between" href="/">
                    <p className="text-[12px] text-[#90A3BF]">Kota Semarang</p>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                </div>
                <div className="w-[145px] h-[48px] flex flex-col border-r-[1px]">
                <h1 className="text-[16px] font-bold flex flex-col">Date</h1>
                  <a className="flex pr-[5px] justify-between" href="/">
                    <p className="text-[12px] text-[#90A3BF]">21 July 2022</p>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                </div>
                <div className="w-[140px] h-[48px] flex flex-col border-r-[1px]">
                <h1 className="text-[16px] font-bold flex flex-col">Time</h1>
                  <a className="flex pr-[5px] justify-between" href="/">
                    <p className="text-[12px] text-[#90A3BF]">01.00</p>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                </div>
              </div>

            </div>
            <div className='w-[486px] h-[90px] flex items-center justify-center border-t-[1px]'>
              <div className='w-[486px] h-[48px] flex justify-between'>
                <div className='w-[284px] h-[48px]'>
                  <h1 className='text-[20px] font-bold'>Total Rental Price</h1>
                  <p className='text-[14px] text-[#90A3BF]'>Overall price and includes rental discount</p>
                </div>
                <div className='w-[128px] h-[48px]'>
                  <h1 className='font-bold text-[32px]'>$80.00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[534px] h-[836px] flex flex-col justify-between border border-transparent rounded bg-[#F6F7F9]'>
          <div className='w-[524px] h-[324px] flex justify-between flex-col py-[20px] px-[20px] bg-[#FFFFFF]'>
            <div className='w-[476px] h-[24px] flex justify-between'>
              <div className='w-[192px] h-[24px]'>
                <h1 className='font-bold text-[20px]'>Top 5 Car Rental </h1>
              </div>
              <div className='w-[24px] h-[24px]'>
                <i className="bi text-2xl bi-three-dots"></i>
              </div>
            </div>
            <div className='w-[476px] h-[220px] flex gap-[20px]'>
              <div className='w-[220px] h-[220px] flex items-center justify-center'style={{ backgroundImage: "url('/ring.svg')"}}>
               <div className='w-[100px] h-[63px] flex items-center justify-center flex-col'>
                <h1 className='font-bold text-[24px]'>72,030</h1>
                <p className='text-[14px] text-[#90A3BF]'>Rental Car</p>
               </div>
              </div>
              <div className='w-[232px] h-[220px] flex flex-col justify-between'>
                <div className='w-[232px] h-[24px] flex justify-between'>
                  <div className='w-[124px] h-[24px] flex items-center'>
                    <i className="bi text-4xl text-[#0D3559] bi-dot"></i>
                    <p className='text-[14px] text-[#90A3BF]'>Sport Car</p>
                  </div>
                  <div>
                    <div className='w-[50px] h-[24px]'>
                      <h1 className='text-[14px] font-bold'>17,439</h1>
                    </div>
                  </div>
                </div>

                <div className='w-[232px] h-[24px] flex justify-between'>
                  <div className='w-[124px] h-[24px] flex items-center'>
                    <i className="bi text-4xl text-[#175D9C] bi-dot"></i>
                    <p className='text-[14px] text-[#90A3BF]'>SUV</p>
                  </div>
                  <div>
                    <div className='w-[50px] h-[24px]'>
                      <h1 className='text-[14px] font-bold'>9,478</h1>
                    </div>
                  </div>
                </div>

                <div className='w-[232px] h-[24px] flex justify-between'>
                  <div className='w-[124px] h-[24px] flex items-center'>
                    <i className="bi text-4xl text-[#2185DE] bi-dot"></i>
                    <p className='text-[14px] text-[#90A3BF]'>Coupe</p>
                  </div>
                  <div>
                    <div className='w-[50px] h-[24px]'>
                      <h1 className='text-[14px] font-bold'>18,197</h1>
                    </div>
                  </div>
                </div>

                <div className='w-[232px] h-[24px] flex justify-between'>
                  <div className='w-[124px] h-[24px] flex items-center'>
                    <i className="bi text-4xl text-[#63A9E8] bi-dot"></i>
                    <p className='text-[14px] text-[#90A3BF]'>Hatchback</p>
                  </div>
                  <div>
                    <div className='w-[50px] h-[24px]'>
                      <h1 className='text-[14px] font-bold'>12,510</h1>
                    </div>
                  </div>
                </div>

                <div className='w-[232px] h-[24px] flex justify-between'>
                  <div className='w-[124px] h-[24px] flex items-center'>
                    <i className="bi text-4xl text-[#A6CEF2] bi-dot"></i>
                    <p className='text-[14px] text-[#90A3BF]'>MPV</p>
                  </div>
                  <div>
                    <div className='w-[50px] h-[24px]'>
                      <h1 className='text-[14px] font-bold'>14,406</h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='w-[524px] h-[480px] flex flex-col justify-between px-[20px] py-[20px] bg-[#FFFFFF]'>
            <div className='w-[476px] h-[24px] flex justify-between'>
              <h1 className='font-bold text-[20px]'>Recent Transaction</h1>
              <p className='text-[12px] text-[#3563E9]'>View All</p>
            </div>
            <div className='w-[476px] h-[400px] flex flex-col  justify-between py-[20px]'>
              <div>
               <div className='w-[486px] h-[82px] border-b-[1px] border-[#C3D4E966] flex gap-[10px]'>
                <div className='w-[132px] h-[72px] flex items-center justify-center'>
                  <Image src='/hero-image-2.svg' alt='image' width={116} height={36} />
                </div>
                <div className='w-[160px] h-[60px] flex flex-col justify-between'>
                  <h1 className='text-[24px] font-bold'>Nissan GT - R</h1>
                  <p className='text-[14px] text-[#3D5278]'>Sport Car</p>
                </div>
                <div className='w-[70px] h-[48px] flex flex-col justify-between pl-[125px]'>
                  <p className='text-[14px] text-[#3D5278]'>20 July</p>
                  <h1 className='font-bold text-[16px]'>$80.00</h1>
                </div>

                
              </div>
              </div>

              <div>
               <div className='w-[486px] h-[82px] border-b-[1px] border-[#C3D4E966] flex gap-[10px]'>
                <div className='w-[132px] h-[72px] flex items-center justify-center'>
                  <Image src='/hero-image-1.svg' alt='image' width={116} height={36} />
                </div>
                <div className='w-[160px] h-[60px] flex flex-col justify-between'>
                  <h1 className='text-[24px] font-bold'>Koegnigsegg</h1>
                  <p className='text-[14px] text-[#3D5278]'>Sport Car</p>
                </div>
                <div className='w-[70px] h-[48px] flex flex-col justify-between pl-[125px]'>
                  <p className='text-[14px] text-[#3D5278]'>19 July</p>
                  <h1 className='font-bold text-[16px]'>$99.00</h1>
                </div>

                
              </div>
              </div>

              <div>
               <div className='w-[486px] h-[82px] border-b-[1px] border-[#C3D4E966] flex gap-[10px]'>
                <div className='w-[132px] h-[72px] flex items-center justify-center'>
                  <Image src='/Rolls - Royce.svg' alt='image' width={116} height={36} />
                </div>
                <div className='w-[160px] h-[60px] flex flex-col justify-between'>
                  <h1 className='text-[24px] font-bold'>Rolls - Royce</h1>
                  <p className='text-[14px] text-[#3D5278]'>Sport Car</p>
                </div>
                <div className='w-[60px] h-[48px] flex flex-col justify-between pl-[125px]'>
                  <p className='text-[14px] text-[#3D5278]'>18 July</p>
                  <h1 className='font-bold text-[16px]'>$96.00</h1>
                </div>

                
              </div>
              </div>

              <div>
               <div className='w-[486px] h-[82px] border-b-[1px] border-[#C3D4E966] flex gap-[10px]'>
                <div className='w-[132px] h-[72px] flex items-center justify-center'>
                  <Image src='/CR  - V.svg' alt='image' width={116} height={36} />
                </div>
                <div className='w-[160px] h-[60px] flex flex-col justify-between'>
                  <h1 className='text-[24px] font-bold'>CR - V</h1>
                  <p className='text-[14px] text-[#3D5278]'>SUV</p>
                </div>
                <div className='w-[60px] h-[48px] flex flex-col justify-between pl-[125px]'>
                  <p className='text-[14px] text-[#3D5278]'>17 July</p>
                  <h1 className='font-bold text-[16px]'>$80.00</h1>
                </div>

                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
