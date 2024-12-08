import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="w-[1440px] h-[1600px] flex bg-[#FFFFFF] border-r-4 border-[#F3F5F7] bg-[#F6F7F9] ">
      <div className="w-[360px] h-[1600px] flex flex-col gap-[110px]">
        <div className="w-[189px] h-[352px] flex flex-col gap-[28px] pt-[32px] pl-[32px]">

          <div className="text-[12px] text-[#90A3BF]"><p>T Y P E</p></div>

          <form>
            <label className="flex items-center text-[20px] gap-2">
              <input type="checkbox"/>
            Sport  (10)</label>
          </form>

          <form>
            <label className="flex items-center text-[20px] gap-2">
              <input type="checkbox"/>
            SUV  (12)</label>
          </form>

          <form>
            <label className="flex items-center text-[20px] gap-2">
              <input type="checkbox"/>
            MPV  (16)</label>
          </form>

          <form>
            <label className="flex items-center text-[20px] gap-2">
              <input type="checkbox"/>
            Sedan  (20)</label>
          </form>

          <form>
            <label className="flex items-center text-[20px] gap-2">
              <input type="checkbox"/>
            Coupe  (14)</label>
          </form>

          <form>
            <label className="flex items-center text-[20px] gap-2">
              <input type="checkbox"/>
            Hatchback  (14)</label>
          </form>

        </div>
        <div className="w-[189px] h-[240px] flex flex-col gap-[28px] pl-[32px]">

          <div className="text-[12px] text-[#90A3BF]"><p>C A P A C I T Y</p></div>

          <form>
              <label className="flex items-center text-[20px] gap-2">
                <input type="checkbox"/>
              2 Person  (10)</label>
            </form>

            <form>
              <label className="flex items-center text-[20px] gap-2">
                <input type="checkbox"/>
              4 Person  (14)</label>
            </form>

            <form>
            <label className="flex items-center text-[20px] gap-2">
              <input type="checkbox"/>
            6 Person  (12)</label>
          </form>

          <form>
              <label className="flex items-center text-[20px] gap-2">
                <input type="checkbox"/>
              8 or More  (16)</label>
          </form>
        </div>
        <div className="w-[296px] h-[104px] flex flex-col gap-[28px] pl-[32px]">

        <div className="text-[12px] text-[#90A3BF]"><p>C A P A C I T Y</p></div>

        <div className="w-[296px] h-[56px]">
          <div>
            <h1 className="text-[20px] text-[#596780]">Max. $100.00</h1>
          </div>
        </div>
        </div>
      </div>
      <div className="w-[1100px] h-[1600px] flex pb-[50px] flex-col bg-[#F6F7F9] items-center justify-between">
        <div className="w-[1022px] h-[132px]">
        <div className="w-[1312px] h-[132px] bg-[#FFFFFF] flex items-center">
        <div className="w-[482px] h-[20px] flex flex-col gap-[10px]">
          <div className="w-[92px] h-[20px] flex justify-between">
            <i className="bi bi-bullseye text-[#3563E94D]"></i>
            <h1 className="text-['16px] font-bold">Pick - Up</h1>
          </div>
          <div className="w-[486px] h-[48px] flex justify-between">
            <div className="w-[135px] h-[48px] flex flex-col border-r-[1px]">
              <h1 className="text-[16px] font-bold">Locations</h1>
              <a className="flex pr-[5px] justify-between" href="/">
                <p className="text-[12px] text-[#90A3BF]">Select your city</p>
                <i className="bi bi-chevron-down"></i>
              </a>
            </div>
            <div className="w-[145px] h-[48px] flex flex-col border-r-[1px]">
            <h1 className="text-[16px] font-bold flex flex-col ">Date</h1>
              <a className="flex pr-[5px] justify-between" href="/">
                <p className="text-[12px] text-[#90A3BF]">Select your date</p>
                <i className="bi bi-chevron-down"></i>
              </a>
            </div>
            <div className="w-[140px] h-[48px] flex flex-col border-r-[1px]">
            <h1 className="text-[16px] font-bold flex flex-col pr-[px]">Time</h1>
              <a className="flex pr-[5px] justify-between" href="/">
                <p className="text-[12px] text-[#90A3BF]">Select your time</p>
                <i className="bi bi-chevron-down"></i>
              </a>
            </div>
          </div>
        </div>

        <button className="w-[60px] h-[60px] border rounded border-transparent bg-[#3563E9]">
        <i className="bi bi-arrow-down-up text-white"></i>
        </button>

        <div className="w-[582px] h-[132px] flex justify-between items-center">
        <div className="w-[482px] h-[20px] flex flex-col gap-[10px] pl-[30px]">
          <div className="w-[92px] h-[20px] flex justify-between">
            <i className="bi bi-bullseye text-[#3563E94D]"></i>
            <h1 className="text-['16px] font-bold">Drop - Off</h1>
          </div>
          <div className="w-[486px] h-[48px] flex justify-between">
            <div className="w-[135px] h-[48px] flex flex-col border-r-[1px]">
              <h1 className="text-[16px] font-bold">Locations</h1>
              <a className="flex pr-[5px] justify-between" href="/">
                <p className="text-[12px] text-[#90A3BF]">Select your city</p>
                <i className="bi bi-chevron-down"></i>
              </a>
            </div>
            <div className="w-[145px] h-[48px] flex flex-col border-r-[1px]">
            <h1 className="text-[16px] font-bold flex flex-col">Date</h1>
              <a className="flex pr-[5px] justify-between" href="/">
                <p className="text-[12px] text-[#90A3BF]">Select your date</p>
                <i className="bi bi-chevron-down"></i>
              </a>
            </div>
            <div className="w-[140px] h-[48px] flex flex-col border-r-[1px]">
            <h1 className="text-[16px] font-bold flex flex-col">Time</h1>
              <a className="flex pr-[5px] justify-between" href="/">
                <p className="text-[12px] text-[#90A3BF]">Select your time</p>
                <i className="bi bi-chevron-down"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>


        </div>
        <div className='w-[1015px] h-[1228px] flex flex-col justify-between'>
          <div className='w-[1015px] h-[388px] flex justify-between'>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">Koenigsegg</h1>
                <p className="text-[14px] text-[#90A3BF]">Sport</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/Koenigsegg.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">Nissan GT - R</h1>
                <p className="text-[14px] text-[#90A3BF]">Sport</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/hero-image-2.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">Rolls-Royce</h1>
                <p className="text-[14px] text-[#90A3BF]">Sport</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/Rolls - Royce.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>


          </div>

          <div className='w-[1015px] h-[388px] flex justify-between'>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">All New Rush</h1>
                <p className="text-[14px] text-[#90A3BF]">SUV</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/All New Rush.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">CR  - V</h1>
                <p className="text-[14px] text-[#90A3BF]">SUV</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/CR  - V.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">All New Terios</h1>
                <p className="text-[14px] text-[#90A3BF]">SUV</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/All New Terios.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>


          </div>

          <div className='w-[1015px] h-[388px] flex justify-between'>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">MG ZX Exclusice</h1>
                <p className="text-[14px] text-[#90A3BF]">SUV</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/MG ZX Excite.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">New MG ZS</h1>
                <p className="text-[14px] text-[#90A3BF]">SUV</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/New MG ZS.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">MG ZX Excite</h1>
                <p className="text-[14px] text-[#90A3BF]">SUV</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/MG ZX Excite.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] gap-[3px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] gap-[3px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] gap-[3px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">6 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$80.00/</h1>
                <p className="text-[14px] text-[#90A3BF]">day</p>
              </div>
              <button className="w-[116px] h-[44px] rounded border-transparent text-[#FFFFFF] bg-[#3563E9] text-[16px]">
                Rent Now
              </button>
            </div>
          </div>


          </div>


        </div>
        <div className='w-[1015px] h-[44px] flex justify-end '>
          <div className='w-[586px] h-[44px] flex justify-end items-center justify-between'>
            <button className='w-[156px] h-[44px] border-transparent rounded text-white bg-[#3563E9] text-[16px]'>
              Show more car
            </button>
            <p>120 Car</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
