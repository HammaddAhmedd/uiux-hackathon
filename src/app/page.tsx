import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1440px] h-[2120px] bg-[#F6F7F9] pt-[30px] pb-[30px] flex flex-col justify-between items-center">

      {/*Starting part 1*/}

      <div className="w-[1312px] h-[360px] flex justify-between">
        <div className="w-[640px] h-[360px] bg-[#54A6FF]  border-transparent rounded">
          <div className="w-[284px] h-[224px] flex flex-col pt-[25px] pl-[25px] justify-between">
            <div className="w-[282px] h-[96px]">
              <h1 className="text-[32px] font-bold text-[#FFFFFF]">The Best Platform for Car Rental</h1>
            </div>
            <div className="w-[284px] h-[48px]">
              <p className="text-[#FFFFFF] text-[16px]">Ease of doing a car rental safely and reliably. Of course at a low price.
              </p>
            </div>
            <button className="w-[120px] h-[44px] text-[#FFFFFF] border border-transparent bg-[#3563E9] rounded">
            Rental Car
            </button>
          </div>

          <div className="w-[406px] h-[116px] flex items-center justify-center pt-[40px] pl-[137px]">
            <Image src='/hero-image-1.svg' alt='image' width={406} height={116} />
          </div>
        </div>

        <div className="w-[640px] h-[360px] bg-[#3563E9] border-transparent rounded">
        <div className="w-[284px] h-[224px] flex flex-col pt-[25px] pl-[25px] justify-between">
            <div className="w-[282px] h-[96px]">
              <h1 className="text-[32px] font-bold text-[#FFFFFF]">Easy way to rent a car at a low price</h1>
            </div>
            <div className="w-[284px] h-[48px]">
              <p className="text-[#FFFFFF] text-[16px]">Providing cheap car rental services and safe and comfortable facilities.
              </p>
            </div>
            <button className="w-[120px] h-[44px] text-[#FFFFFF] border border-transparent bg-[#54A6FF] rounded">
            Rental Car
            </button>
          </div>

          <div className="w-[406px] h-[116px] pt-[40px] pl-[137px]">
           <Image src='/hero-image-2.svg' alt='image' width={406} height={116} />
          </div>
        </div>
      </div>

      {/*Starting part 2*/}

      <div className="w-[1312px] h-[132px] flex justify-between items-center">
        <div className="w-[582px] h-[20px] flex flex-col gap-[10px] pl-[30px]">
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
        <div className="w-[582px] h-[20px] flex flex-col gap-[10px] pl-[30px]">
          <div className="w-[110px] h-[20px] flex justify-between">
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

      {/*Starting part 3*/}

      <div className="w-[1312px] h-[452px] flex flex-col justify-between">
        <div className="w-[1312px] h-[44px] flex items-center justify-between">
          <p className="text-[16px] text-[#90A3BF]">Popular Car</p>
          <button className="w-[104px] h-[44px] text-[16px] border-transparent text-[#3563E9]">
            View All
          </button>
        </div>

        <div className="w-[1312px] h-[388px] flex justify-between">
          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[128px] h-[48px]">
                <h1 className="text-[20px] font-bold">Koenigsegg</h1>
                <p className="text-[14px] text-[#90A3BF]">Sport</p>
              </div>
              <div><i className="bi bi-heart hover:text-red"></i></div>
            </div>
            <div className="w-[232px] h-[72px]">
              <Image src='/Koenigsegg.svg' alt='image' width={232} height={72} />
            </div>
            <div className="w-[280px] h-[24px] flex items-center justify-between">
              <div className="w-[40px] h-[24px] flex">
                <i className="bi bi-fuel-pump-fill text-[#90A3BF]"></i>
                <p className="text-[14px] text-[#90A3BF]">90L</p>
              </div>
              <div className="w-[50px] h-[24px] flex">
                <i className="bi bi-gear-wide"></i>
                <p className="text-[14px] text-[#90A3BF]">Manual</p>
              </div>
              <div className="w-[80px] h-[24px] flex">
                <i className="bi bi-people-fill"></i>
                <p className="text-[14px] text-[#90A3BF]">2 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$99.00/</h1>
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
                <p className="text-[14px] text-[#90A3BF]">2 People</p>
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
              <div className="w-[128px] h-[48px]">
                <h1 className="text-[20px] font-bold">Rolls - Royce</h1>
                <p className="text-[14px] text-[#90A3BF]">Sedan</p>
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
                <p className="text-[14px] text-[#90A3BF]">2 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$96.00/</h1>
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
                <p className="text-[14px] text-[#90A3BF]">2 People</p>
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

      {/*Starting part 4*/}

      <div className="w-[1312px] h-[872px] flex flex-col">
        <div className="w-[196px] h-[44px] flex items-center justify-center">
          <p className="text-[16px] text-[#90A3BF]">Recomendation Car</p>
        </div>
        <div className="w-[1312px] h-[808px] flex flex-col justify-between">
          <div className="w-[1312px] h-[388px] flex justify-between">

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
                <h1 className="text-[20px] font-bold">$72.00/</h1>
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
              <Image src='/CR  - V-2.svg' alt='image' width={232} height={72} />
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
                <h1 className="text-[20px] font-bold">NAll New Terios</h1>
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
                <h1 className="text-[20px] font-bold">$74.00/</h1>
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

          </div>
          <div className="w-[1312px] h-[388px] flex justify-between">

          <div className="w-[304px] h-[388px] bg-[#FFFFFF] flex flex-col justify-between pb-[15px] pt-[15px] pl-[15px] pr-[15px]">
            <div className="w-[270px] h-[48px] flex justify-between items-center">
              <div className="w-[140px] h-[48px]">
                <h1 className="text-[20px] font-bold">MG ZX Exclusice</h1>
                <p className="text-[14px] text-[#90A3BF]">Hatchback</p>
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
                <p className="text-[14px] text-[#90A3BF]">4 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$76.00/</h1>
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
              <Image src='/New MG ZS-2.svg' alt='image' width={232} height={72} />
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
                <p className="text-[14px] text-[#90A3BF]">Hatchback</p>
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
                <p className="text-[14px] text-[#90A3BF]">4 People</p>
              </div>
            </div>
            <div className="w-[280px] h-[44px] flex justify-between items-center">
              <div className="w-[116px] h-[44px] flex items-center">
                <h1 className="text-[20px] font-bold">$74.00/</h1>
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

          </div>
        </div>
      </div>

      {/*Starting part 5*/}
      <div className="w-[1312px] h-[44px] flex justify-end">
        <div className="w-[734px] h-[44px] flex justify-center justify-between items-center">
          <button className="w-[156px] h-[44px] text-[16px] rounded text-white border-transparent bg-[#3563E9]">
            Show more car
          </button>
          <p className="text-[14px] text-[#90A3BF]">120 Car</p>
        </div>
      </div>

    </div>

  );
}
