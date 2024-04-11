import React, { useState } from "react";
import logo from "../photos/logo.png"
import {FaBars, FaXmark} from 'react-icons/fa6';
import logo_name from "../photos/logo_name.png"

const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    return (
      <>
        <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-blue-800 fixed top-0 right-0 left-0 w-full">
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                <div className="flex space-x-16 items-center">
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-blue-800">
                        <img className="w-10 inline-block items-center" src={logo} alt="PP"/>
                    </a>
                    <ul className="md:flex text-2xl space-x-8 hidden cursor-pointer text-blue-800 ">
                        <li className="block hover:text-blue-500">Personal</li>
                        <li className="block hover:text-blue-500">Business</li>                       
                        <li className="block hover:text-blue-500">Developer</li>
                        <li className="block hover:text-blue-500">Help</li>                       
                    </ul>
                </div>
                <div className="space-x-4 md:flex hidden items-center">
                    <button className="bg-white text-blue-800 py-2 px-6 rounded-full border border-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300">Log In</button>
                    <button className="bg-blue-800 text-white py-2 px-6 rounded-full border border-blue-800 hover:bg-white hover:text-blue-800">Sign Up</button>
                </div>
                <div className="md:hidden w-32">
                    <img src={logo_name} alt="PayPal"/>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                        {
                            isMenuOpen ? (<FaXmark className="w-6 h-6 text-blue-800"/>) : (<FaBars className="w-6 h-6 text-blue-800"/>)
                        }

                    </button>
                </div>
            </div>
        </nav>
        <div className={`space-y-4 px-4 pt-24 pb-5 bg-blue-700 text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            <li className="block hover:text-black text-white cursor-pointer">Personal</li>
            <li className="block hover:text-black text-white cursor-pointer">Business</li>                       
            <li className="block hover:text-black text-white cursor-pointer">Developer</li>
            <li className="block hover:text-black text-white cursor-pointer">Help</li> 
            <button className="bg-white text-blue-800 py-2 px-6 rounded-full border border-blue-800 hover:bg-blue-900 hover:text-white transition-all duration-300">Log In</button>
            <button className="bg-blue-900 text-white py-2 px-6 rounded-full border border-blue-900 hover:bg-white hover:text-blue-800">Sign Up</button>
        </div>
     </>
    );
};

export default Navbar;