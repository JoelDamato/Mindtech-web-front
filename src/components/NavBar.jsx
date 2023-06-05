import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-black text-white h-[10vh] mx-auto px-5 flex items-center justify-between">
      <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
        Logo
      </a>

      <ul className="flex items-center gap-5">
        <li>
          <Link
            to="/demostration"
            className="hover:text-cyan-500 transition-colors"
            href=""
          >
            Link 1
          </Link>
        </li>
        <li>
          <a className="hover:text-cyan-500 transition-colors" href="">
            Link 2
          </a>
        </li>
        <li>
          <a className="hover:text-cyan-500 transition-colors" href="">
            Link 3
          </a>
        </li>
        <li>
          <a className="hover:text-cyan-500 transition-colors" href="">
            Link 4
          </a>
        </li>
        <li>
          <a className="hover:text-cyan-500 transition-colors" href="">
            Link 5
          </a>
        </li>
      </ul>
    </div>
  );
}
