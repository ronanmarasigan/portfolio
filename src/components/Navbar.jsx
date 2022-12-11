import { useState } from "react";
import { close, logo, menu,  } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className=" w-[70px] h-[50px]" /> 
      
      <h4 className="text-white pl-2 font-poppins font-normal"> Ronan Marasigan</h4>
      
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            
          </li>
        ))}
        
      </ul>




      <a href="MarasiganCV.pdf" download='MarasiganCv.pdf'>
      <button className=" button text-cyan-500 font-poppins font-normal cursor-pointer text-[16px] ml-10 sm:flex hidden">
        <span class="actual-text">&nbsp;Resume&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;Resume&nbsp;</span></button>
      </a>




      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <a href="MarasiganCV.pdf" download='MarasiganCv.pdf'>
          <button className="  text-cyan-500 font-poppins font-normal cursor-pointer text-[16px] ">Resume</button>
          </a>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
