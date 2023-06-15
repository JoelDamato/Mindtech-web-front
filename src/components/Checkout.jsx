import React from 'react'

export default function Checkout () {
  return (
    <div className="flex flex-col w-full min-h-[100vh] bg-black ">
        <form
                    className="w-[90%] rounded-[15px] bg-white p-2 min-h-[90vh] mt-4 flex flex-col items-center pl-2 justify-around bg-[#0000000e] text-black   sm:w-[70%]  md:w-[50%] "
                    action=""
                  >
                    <p className='text-black'>Payment details:</p>
                    <input
                      placeholder="Name"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    <input
                      placeholder="Address"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    <input
                      placeholder="Email"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    <input
                      placeholder="Phone Number"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    
                    <input
                      placeholder="Name"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    <input
                      placeholder="Address"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    <input
                      placeholder="Email"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    <input
                      placeholder="Phone Number"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    
                    <input
                      placeholder="Weigth"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                    <input
                      placeholder="Dimensions"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                    />
                  </form>
    </div>
  )
}
