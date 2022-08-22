import React from "react";
import { FaSistrix } from "react-icons/fa";
const Header = () => {
  const menu = (
    <>
      <li>
        <a>Retail</a>
      </li>
      <li>
        <a>sme</a>
      </li>
      <li>
        <a>corporate</a>
      </li>
      <li>
        <a>about us</a>
      </li>
      <li>
        <a>campgains</a>
      </li>
    </>
  );

  return (
    <div class="navbar  px-2 md:px-12 ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 uppercase text-secondary font-bold">
          {menu}
        </ul>
      </div>
      <div class="navbar-end  ">
        <FaSistrix class="text-4xl mr-3 md:mr-6" />
        <a class="btn bg-primary text-white">iSERVICE</a>
      </div>
    </div>
  );
};

export default Header;
