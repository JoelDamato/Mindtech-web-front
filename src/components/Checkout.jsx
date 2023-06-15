import React, {useState} from 'react'

export default function Checkout () {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");


    const dataPayment = {
     name,
     address,
     email,
     phone,
     code
}
console.log(dataPayment)

  return (
    <div className="flex flex-col  justify-evenly items-center w-full min-h-[100vh] bg-black ">
        <form
                    className="w-[90%] rounded-[15px] bg-white p-2 min-h-[50vh] mt-4 flex flex-col items-center pl-2 justify-around bg-[#0000000e] text-black   sm:w-[70%]  md:w-[50%] "
                    action=""
                  >
                    <p className='text-black'>Payment details:</p>
                    <input
                      placeholder="Name"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      placeholder="Address"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                      placeholder="Email"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      placeholder="Phone Number"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    
                    <input
                      placeholder="Zip code"
                      className="h-[5vh] w-[95%] bg-[#d6d6d6] rounded-[5px] placeholder:pl-2"
                      type="text"
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <select className='w-[95%] h-[5vh] pl-2 text-[#4c4c4c66] font-medium rounded-[5px] bg-[#9797974e]  ' name="" id="">
                        <option value="">Payment method</option>
                        <option value="">Cash (transfer or deposit)</option>
                        <option value="">Mercado Pago</option>
                    </select>
                    <button>Send</button>
                  </form>

          <div className='bg-white rounded-[15px] font-montserrat items-center justify-evenly p-2 flex flex-col w-[90%] min-h-[90vh]'>
              <h1 className='font-montserrat font-bold text-[#000000ac]'>MINDTECH INC.</h1>
              <div className='w-full h-[20vh] items-center justify-between  flex'>
                  <p className='text-left w-[60%] h-full border border-[#000]'>
                      CUIT: 20-34211743-0 <br />
                      Technology products store <br />
                      Nº: 0003- {Math.floor(Math.random() * 900) + 100}
                  </p>

                  <div className='w-[40%] h-full border border-[#000]'>
                      <p className='text-right '>Purchase ticket
                          -{Math.floor(Math.random() * 9000000000) + 10000000}
                          <br />
                          15/6/2023
                      </p>
                  </div>
              </div>
                  <div className='w-full border border-black'>
                    <p>Name: </p>
                    <p>Address: </p>
                    <p>DNI: </p>
                    <p>Payment method: </p>
                  </div>
              <table className='w-[100%] flex flex-col border border-black min-h-[10vh] bg-white'>
                  <tr className='text-left text-[10px] w-full flex'>
                      <td className='border w-[20%] text-left border-white bg-[#66656559]'>Unit</td>
                      <td className='border w-[15%] text-left border-white bg-[#66656559]'>Price</td>
                      <td className='border w-[45%] text-left border-white bg-[#66656559]'>Product Name</td>
                      <td className='border w-[20%] text-left border-white bg-[#66656559]'>Amount:</td>
                  </tr>
                  <tr className='text-left w-full flex'>
                      <td className='border w-[20%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>2</td>
                      <td className='border w-[15%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>200</td>
                      <td className='border w-[45%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>Product test</td>
                      <td className='border w-[20%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'></td>
                  </tr>
                  <tr className='text-left w-full flex'>
                      <td className='border w-[20%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>1</td>
                      <td className='border w-[15%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>600</td>
                      <td className='border w-[45%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>Product test 2</td>
                      <td className='border w-[20%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'></td>
                  </tr>
                  <tr className='text-left w-full flex'>
                      <td className='border w-[20%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>3</td>
                      <td className='border w-[15%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>300</td>
                      <td className='border w-[45%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'>Product test 3</td>
                      <td className='border w-[20%] h-[4vh] text-left text-[12px] border-white bg-[#66656559]'></td>
                  </tr>
              </table>
          </div>
                  
    </div>
  )
}
