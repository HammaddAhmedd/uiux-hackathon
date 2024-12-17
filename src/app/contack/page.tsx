import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-[1440px] h-[2240px] flex gap-[20px] py-[30px] px-[30px] bg-[#F6F7F9]'>
      <div className='w-[852px] h-[2176px] flex flex-col gap-[20px] bg-[#F6F7F9]'>
        <div className='w-[852px] h-[336px] flex flex-col px-[20px] py-[20px] justify-between bg-[#FFFFFF]'>
          <div className='w-[800px] h-[48px] flex justify-between'>
            <div className='w-[192px] h-[48px]'>
              <h1 className='text-[20px] font-bold'>Billing Info</h1>
              <p className='text-[14px] text-[#90A3BF]'>Please enter your billing info</p>
            </div>
            <div className='w-[72px] h-[20px]'>
              <p className='text-[14px] text-[#90A3BF]'>Step 1 of 4</p>
            </div>
          </div>
          <div className='w-[800px] h-[92px] flex justify-between'>
            <div className='w-[386px] h-[92px] flex flex-col gap-[5px]'>
              <h1 className='text-[16px] font-bold'>Name</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[368px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Your name'>
                </textarea>
              </div>
            </div>

            <div className='w-[386px] h-[92px] flex flex-col gap-[5px]'>
              <h1 className='text-[16px] font-bold'>Phone number</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[368px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Phone number'>
                </textarea>
              </div>
            </div>
          </div>

          <div className='w-[800px] h-[92px] flex justify-between'>
            <div className='w-[386px] h-[92px] flex flex-col gap-[5px]'>
              <h1 className='text-[16px] font-bold'>Address</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[368px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Address'>
                </textarea>
              </div>
            </div>

            <div className='w-[386px] h-[92px] flex flex-col gap-[5px]'>
              <h1 className='text-[16px] font-bold'>Town / City</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[368px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Town or city'>
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[852px] h-[664px] border border-transparent rounded px-[20px] py-[20px] flex 
        justify-between flex-col bg-[#FFFFFF]'>

        <div className='w-[800px] h-[48px] flex justify-between'>
            <div className='w-[192px] h-[48px]'>
              <h1 className='text-[20px] font-bold'>Billing Info</h1>
              <p className='text-[14px] text-[#90A3BF]'>Please enter your billing info</p>
            </div>
            <div className='w-[72px] h-[20px]'>
              <p className='text-[14px] text-[#90A3BF]'>Step 2 of 4</p>
            </div>
          </div>
          <div className='w-[92px] h-[20px] flex justify-between'>
            <i className="bi text-[#3563E9] bi-bullseye"></i>
            <h1 className='font-bold text-[16px]'>Pick - Up</h1>
          </div>
          <div className='w-[800px] h-[92px] flex justify-between'>
            <div className='w-[386px] h-[92px]  flex flex-col justify-between'>
              <h1 className='text-[16px] font-bold'>Locations</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[300px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Select your city'>
                </textarea>
                <div className='w-[14px] h-[14px]'><i className="bi bi-chevron-down"></i></div>
              </div>
            </div>

            <div className='w-[386px] h-[92px]  flex flex-col justify-between'>
              <h1 className='text-[16px] font-bold'>Date</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[300px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Select your date'>
                </textarea>
                <div className='w-[14px] h-[14px]'><i className="bi bi-chevron-down"></i></div>
              </div>
            </div>
          </div>

          <div className='w-[800px] h-[92px] flex justify-between'>
            <div className='w-[386px] h-[92px]  flex flex-col justify-between'>
              <h1 className='text-[16px] font-bold'>Time</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[300px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Select your time'>
                </textarea>
                <div className='w-[14px] h-[14px]'><i className="bi bi-chevron-down"></i></div>
              </div>
            </div>
          </div>

          <div className='w-[110px] h-[20px] flex justify-between'>
            <i className="bi text-[#3563E9] bi-bullseye"></i>
            <h1 className='font-bold text-[16px]'>Drop - Off</h1>
          </div>
          <div className='w-[800px] h-[92px] flex justify-between'>
            <div className='w-[386px] h-[92px] flex flex-col justify-between'>
              <h1 className='text-[16px] font-bold'>Locations</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[300px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Select your city'>
                </textarea>
                <div className='w-[14px] h-[14px]'><i className="bi bi-chevron-down"></i></div>
              </div>
            </div>

            <div className='w-[386px] h-[92px]  flex flex-col justify-between'>
              <h1 className='text-[16px] font-bold'>Date</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[300px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Select your date'>
                </textarea>
                <div className='w-[14px] h-[14px]'><i className="bi bi-chevron-down"></i></div>
              </div>
            </div>
          </div>

          <div className='w-[800px] h-[92px] flex justify-between'>
            <div className='w-[386px] h-[92px]  flex flex-col justify-between'>
              <h1 className='text-[16px] font-bold'>Time</h1>
              <div className='w-[368px] h-[56px] bg-[#F6F7F9] flex items-center pl-[30px]'>
                <textarea className='w-[300px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Select your time'>
                </textarea>
                <div className='w-[14px] h-[14px]'><i className="bi bi-chevron-down"></i></div>
              </div>
            </div>
          </div>

        </div>
        <div className='w-[852px] h-[596px] bg-[#FFFFFF] flex-col px-[20px] py-[20px] flex justify-between'>
        <div className='w-[800px] h-[48px] flex justify-between'>
            <div className='w-[192px] h-[48px]'>
              <h1 className='text-[20px] font-bold'>Billing Info</h1>
              <p className='text-[14px] text-[#90A3BF]'>Please enter your billing info</p>
            </div>
            <div className='w-[72px] h-[20px]'>
              <p className='text-[14px] text-[#90A3BF]'>Step 3 of 4</p>
            </div>
          </div>
          <div className='w-[804px] h-[308px] flex flex-col justify-between bg-[#F6F7F9] px-[10px] py-[10px]'>
            <div className='w-[780px] h-[20px] flex justify-between'>
              <div className='w-[112px] h-[20px] flex justify-between '>
                <i className="bi text-[#3563E9] bi-bullseye"></i>
                <h1 className='font-bold text-[16px]'>Credit Card</h1>
              </div>
              <div className='w-[92px] h-[20px]'>
                <Image src='Visa.svg' alt='visa' width={92} height={20} />
              </div>
            </div>
          <div className='w-[800px] h-[92px] flex justify-between'>
            <div className='w-[386px] h-[92px] flex flex-col gap-[5px]'>
              <h1 className='text-[16px] font-bold'>Card Number</h1>
              <div className='w-[368px] h-[56px] bg-[#FFFFFF] flex items-center pl-[30px]'>
                <textarea className='w-[368px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Card number'>
                </textarea>
              </div>
            </div>

            <div className='w-[386px] h-[92px] flex flex-col gap-[5px]'>
              <h1 className='text-[16px] font-bold'>Expration Date</h1>
              <div className='w-[368px] h-[56px] bg-[#FFFFFF] flex items-center pl-[30px]'>
                <textarea className='w-[368px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='DD / MM / YY'>
                </textarea>
              </div>
            </div>
          </div>

          <div className='w-[800px] h-[92px] flex justify-between'>
            <div className='w-[386px] h-[92px] flex flex-col gap-[5px]'>
              <h1 className='text-[16px] font-bold'>Card Holder</h1>
              <div className='w-[368px] h-[56px] bg-[#FFFFFF] flex items-center pl-[30px]'>
                <textarea className='w-[368px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='Card holder'>
                </textarea>
              </div>
            </div>

            <div className='w-[386px] h-[92px] flex flex-col gap-[5px]'>
              <h1 className='text-[16px] font-bold'>CVC</h1>
              <div className='w-[368px] h-[56px] bg-[#FFFFFF] flex items-center pl-[30px]'>
                <textarea className='w-[368px] h-[30px] bg-transparent text-[#90A3BF] border border-transparent 
                text-[14px] rounded' placeholder='CVC'>
                </textarea>
              </div>
            </div>
          </div>
          </div>
          <div className='w-[804px] h-[56px] flex justify-between bg-[#F6F7F9] border border-transparent rounded
          items-center justify-center px-[15px]'>
            <div className='w-[110px] h-[24px]'>
              <div>
                <form>
                 <label className="flex items-center font-bold text-[16px] gap-[10px]">
                 <input type="checkbox"/>
                 PayPal  </label>
                </form>
              </div>
              <div><h1 className='font-bold text-[16px]'></h1></div>
            </div>
            <div className='w-[100px] h-[24px]'>
              <Image src='/PayPal.svg' alt='image' width={100} height={24} />
            </div>
          </div>

          <div className='w-[804px] h-[56px] flex justify-between bg-[#F6F7F9] border border-transparent rounded
          items-center justify-center px-[15px]'>
            <div className='w-[110px] h-[24px]'>
              <div>
                <form>
                 <label className="flex items-center font-bold text-[16px] gap-[10px]">
                 <input type="checkbox"/>
                 Bitcoin  </label>
                </form>
              </div>
              <div><h1 className='font-bold text-[16px]'></h1></div>
            </div>
            <div className='w-[100px] h-[24px]'>
              <Image src='/Bitcoin.svg' alt='image' width={94} height={20} />
            </div>
          </div>
        </div>
        <div className='w-[852px] h-[484px] bg-[#FFFFFF] px-[20px] py-[20px] flex flex-col justify-between'>
          <div className='w-[800px] h-[48px] flex justify-between'>
            <div className='w-[436px] h-[48px]'>
              <h1 className='text-[20px] font-bold'>Confirmation</h1>
              <p className='text-[14px] text-[#90A3BF]'>We are getting to the end. Just few clicks and your rental is ready!
              </p>
            </div>
            <div className='w-[72px] h-[20px]'>
              <p className='text-[14px] text-[#90A3BF]'>Step 4 of 4</p>
            </div>
          </div>
          <div className='w-[804px] h-[56px] flex justify-between bg-[#F6F7F9] border border-transparent rounded
          items-center justify-center px-[15px]'>
            <div className='w-[110px] h-[24px]'>
              <div className='w-[654px] h-[24px]'>
                <form>
                 <label className="flex font-bold text-[16px] gap-[10px]">
                 <input type="checkbox"/>
                 I agree with sending an Marketing and newsletter emails. No spam, promissed!  </label>
                </form>
              </div>
            </div>
          </div>

          <div className='w-[804px] h-[56px] flex justify-between bg-[#F6F7F9] border border-transparent rounded
          items-center justify-center px-[15px]'>
            <div className='w-[110px] h-[24px]'>
              <div className='w-[654px] h-[24px]'>
                <form>
                 <label className="flex font-bold text-[16px] gap-[10px]">
                 <input type="checkbox"/>
                 I agree with our terms and conditions and privacy policy.  </label>
                </form>
              </div>
            </div>
          </div>
          <button className='w-[140px] h-[56px] text-white text-[16px] bg-[#3563E9] rounded'>
            Rent Now
          </button>
          <div className='w-[548px] h-[100px] flex flex-col justify-between'>
            <div className='w-[32px] h-[32px]'><i className="bi text-[32px] bi-shield-check"></i></div>
            <div className='w-[548px] h-[52px] flex flex-col justify-between'>
              <h1 className='font-bold text-[16px]'>All your data are safe</h1>
              <p className='text-[14px] text-[#90A3BF]'>We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[492px] h-[560px] bg-[#FFFFFF] flex flex-col justify-between border px-[20px] py-[20px] border-transparent rounded'>
        <div className='w-[444px] h-[76px] flex flex-col justify-between'>
          <h1 className='font-bold text-[20px]'>Rental Summary</h1>
          <p className='text-[#90A3BF] text-[14px]'>Prices may change depending on the length of the rental and the price of your rental car.
          </p>
        </div>
        <div className='w-[444px] h-[108px] flex gap-[15px]'>
          <div className='w-[132px] h-[108px] bg-[#3563E9] flex border border-transparent rounded items-center 
          justify-center'>
            <Image src='/hero-image-2.svg' alt='image' width={116} height={36} />
          </div>
          <div className='w-[220px] h-[72px] flex flex-col justify-between pt-[10px]'>
            <div className='w-[220px] h-[40px]'><h1 className='font-bold text-[32px]'>Nissan GT - R</h1></div>
            <div className='w-[220px] h-[24px] flex justify-between'>
              <div className='w-[108px] h-[20px] flex justify-between'>
                <i className="bi text-[#FBAD39] bi-star-fill"></i>
                <i className="bi text-[#FBAD39] bi-star-fill"></i>
                <i className="bi text-[#FBAD39] bi-star-fill"></i>
                <i className="bi text-[#FBAD39] bi-star-fill"></i>
                <i className="bi text-[#90A3BF] bi-star"></i>
              </div>
              <div className='w-[104px] h-[20px]'>
                <p className='text-[14px] text-[#596780]'>440+ Reviewer</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[444px] h-[90px] flex flex-col justify-between border-t-[1px] border-[#C3D4E966]'>
          <div className='w-[444px] h-[20px] pt-[20px] flex justify-between'>
            <p className='text-[16px] text-[#90A3BF]'>Subtotal</p>
            <h1 className='text-[16px] font-bold'>$80.00</h1>
          </div>
          <div className='w-[444px] h-[20px] flex justify-between'>
            <p className='text-[16px] text-[#90A3BF]'>Tax</p>
            <h1 className='text-[16px] font-bold'>$0</h1>
          </div>
        </div>
        <div className='w-[444px] h-[56px] bg-[#F6F7F9] flex px-[10px] items-center justify-between'>
          <textarea className='w-[150px] h-[24px] bg-transparent text-[#90A3BF] border border-transparent 
          text-[14px] rounded' placeholder='Apply promo code'>
          </textarea>
          <h1 className='text-[16px] font-bold'>Apply now</h1>
        </div>
        <div className='w-[444px] h-[48px] flex justify-between'>
          <div className='w-[284px] h-[48px] flex flex-col justify-between'>
            <h1 className='text-[20px] font-bold'>Total Rental Price</h1>
            <p className='text-[14px] text-[#90A3BF]'>Overall price and includes rental discount</p>
          </div>
          <div className='w-[128px] h-[48px]'><h1 className='font-bold text-[32px]'>$80.00</h1></div>
        </div>
      </div>
    </div>
  )
}

export default page
