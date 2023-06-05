import React from "react";
import { Link } from "react-router-dom";
import useStore from "../store/store";

export default function Demostration() {
  const count = useStore((state) => state.count);
  const inc = useStore((state) => state.inc);
  console.log(count);
  return (
    <div className="bg-black h-screen w-screen text-white flex flex-col justify-center items-center">
      <h1>Demostration</h1>
      <Link
        to="/"
        className="hover:text-cyan-500 transition-colors"
        href=""
      >
        Link 1
      </Link>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}
