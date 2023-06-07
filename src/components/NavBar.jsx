import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-black text-white h-[130px]  mx-auto px-5 flex items-center justify-between  ">
      <a className="text-[24px] w-[278px] flex flex-col items-center hover:text-[#cacaca] transition-colors    cursor-pointer tracking-[20px] font-semibold ">
        <p>MINDTECH</p>
        <p className="text-[13px] font-light" >TECHNO</p>
      </a>


      <ul className="flex justify-evenly items-center w-[565px] h-[48px]  text-[16px] font-medium tracking-[5px] ">
        <li className=" hover:border-b-[2px] transition duration-300 ease-in-out  " >
          <Link
            to="/demostration"
            className=""
            href=""
          >
            Home
          </Link>
        </li>
        <li className=" hover:border-b-[2px] transition duration-300 ease-in-out  " >
          <Link className="" href="">
            Login | Register
          </Link>
        </li>
        <li className=" hover:border-b-[2px] transition duration-300 ease-in-out  " >
          <Link className="" href="">
            Store
          </Link>
        </li>
        <li className=" hover:border-b-[2px] transition duration-300 ease-in-out  " >
          <Link className="" href="">
            Details
          </Link>
        </li>
      </ul>
      <ul className="flex items-center justify-evenly  w-[180px] h-[48px] hover: ">
        <Link className=" hover:border-b-[2px] transition duration-300 ease-in-out  " >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </Link  >
        <Link className=" hover:border-b-[2px] transition duration-300 ease-in-out  " >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>

        </Link>
        <Link className=" hover:border-b-[2px] transition duration-300 ease-in-out  " >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </Link>
      </ul>
    </div>
  );
}
