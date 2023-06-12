import React from 'react';

export default function Cart() {
  return (
    <div className='bg-gray-500 h-[100vh] mt-[90vh] w-[30%] flex flex-col items-center'>
    <h1 className='w-100 text-[4vh] mt-4 tracking-[10px] '>CART</h1>
    <div className="w-full">
          <div>
            <span >Subtotal: <span className="subtotal">$0</span></span>
          </div>
          <button >Continue to checkout</button>
        </div>
    </div>
  );
}
