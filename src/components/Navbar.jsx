import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import { Context } from "../context/ContextAPI";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { handleSearchChange, getFinalCartCount } = useContext(Context);
  const navigate = useNavigate();

  const openNavMenu = () => {
    const navMenu = document.querySelector(".nav-menu");

    navMenu?.classList.toggle("md:hidden");
  };
  return (
    <>
      <nav className="flex justify-between items-center px-28 py-3 z-[999] bg-white fixed top-0 w-full shadow-lg h-[68px] md:px-16 sm:px-8">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer uppercase text-[24px] text-primary font-bold tracking-[1px]"
        >
          Gadgify.
        </h1>

        <div
          className={`${
            useLocation().pathname === "/shop" ? "flex" : "hidden"
          } items-center gap-2 py-[6px] px-[10px] bg-[#ededed] rounded-lg relative w-[400px] sm:w-1/2`}
        >
          <IoSearchSharp className="text-[20px]" />
          <input
            type="text"
            className="outline-0 bg-transparent w-full border-none"
            placeholder="search by product name"
            onChange={(e) => handleSearchChange(e)}
          />
        </div>

        <div className="nav-menu flex items-center justify-center  gap-12 md:hidden md:absolute right-5 top-20 md:flex-col md:gap-5 md:px-3 md:py-5 md:rounded-full md:bg-[#a0ded5]">
          <Link
            to="/"
            className="flex flex-col pt-1 justify-center items-center gap-0 text-primary md:mt-10 hover:text-[#4f9d91] transition"
          >
            <IoHomeSharp className="text-[20px]" />
            <p className="text-sm tracking-wide md:hidden ">HOME</p>
          </Link>
          <Link
            to="/shop"
            className="flex flex-col pt-1 justify-center items-center gap-0 text-primary hover:text-[#4f9d91] transition"
          >
            <AiFillShop className="text-[20px]" />
            <p className="text-sm tracking-wide  md:hidden">SHOP</p>
          </Link>

          <Link
            to="/cart"
            className="relative flex flex-col pt-1 justify-center items-center gap-0 text-primary hover:text-[#4f9d91] transition"
          >
            <FaCartShopping className="text-[20px]" />
            <p className="text-sm tracking-wide  md:hidden">CART</p>

            {getFinalCartCount() > 0 && (
              <div className="absolute top-[-2px] right-[-2px] bg-red-600 rounded-full w-4 h-4 leading-4 text-center text-white font-bold text-xs">
                {getFinalCartCount()}
              </div>
            )}
          </Link>
          <Link
            to="/userProfile"
            className="text-primary ml-8 md:m-0 hover:text-[#4f9d91] transition"
          >
            <FaUserCircle className="text-[32px] md:text-[20px]" />
          </Link>
        </div>
        <div
          onClick={openNavMenu}
          className="absolute right-5 top-20 hidden cursor-pointer md:block text-primary text-[20px] bg-[#a0ded5] rounded-full p-3"
        >
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* @media only screen and (max-width: 700px) {
  nav {
    display: flex;
    margin: 0px;
    padding: 10px;
    justify-content: space-between;
  }

  .logo h2 {
    display: none;
    margin: 0;
  }
  .burger-icon {
    display: block;
    margin-left: 10px;
    color: #ffffff;
  }

  input {
    width: 150px;
    border: 2px solid white;
  }
  input:hover {
    border-color: gray;
  }

  .icons-container {
    display: flex;
    gap: 40px;
    margin-right: 50px;
  }
  .nav-icons {
    width: 1.2rem;
    margin-left: 1rem;
  }
} */
}
