import React from "react";

export default function Footer() {
  return (
<footer className="w-full flex justify-center">
    <div className="flex flex-col items-center bg-white h-[40vh] border-t-[1px] border-black text-black text-center w-[90%]">
      <h1 className="mt-3 text-[4vh] font-semibold tracking-[7px]">MINDTECH</h1>
      <h2 className="text-[2vh] tracking-[3px] mt-[-0.5%]">TECNHO</h2>
      <div className="flex gap-5 mt-5">
        <a href="https://www.whatsapp.com"><img className="w-[30px]" src="../public/whatsapp.png" alt="" /></a>
        <a href="https://www.facebook.com"><img className="w-[30px]" src="../public/facebook.png" alt="" /></a>
        <a href="https://www.instagram.com"><img className="w-[30px]" src="../public/instagram.png" alt="" /></a>
        <a href="https://www.gmail.com"><img className="w-[30px]" src="../public/gmail.png" alt="" /></a>
        <a href="https://www.youtube.com.ar"><img className="w-[30px]" src="../public/youtube.png" alt="" /></a>
        
      </div>
      <p className="mt-[3%] tracking-[5px] ">© 2023 Copyright:</p>
      <p className="font-semibold sm:tracking-[10.5px] mt-4">Aguirre Denise | Dimaro Joaquin  | Damato Joel |  Meneses Joaquin  | Orozco Jorge </p>
    </div>
    </footer>
  );
}
