import React from "react";
import Paypal from "../photos/Paypal.png"

const Footer = ()=>{
    return (
        <div>
            <div className="md:px-12 max-w-screen-2xl mx-auto bg-white lg:flex">
                <div>
                    <h1 className="pt-48 font-semibold text-lg text-blue-800 relative left-10">Small-to-Medium Business</h1>
                    <p className="text-gray-300 relative left-9 bottom-2">____________________________________________________________</p>
                    <div className="md:flex pt-4 ">
                        <ul className="text-lg font-semibold relative left-10">
                            <li className="pb-2 cursor-pointer hover:text-blue-800">Introduction</li>
                            <li className="cursor-pointer hover:text-blue-800">Getting started</li>
                        </ul>
                        <ul className="text-lg relative lg:left-56 sm:left-10 sm:pt-2 lg:pt-0">
                            <li className="font-semibold pb-2 cursor-pointer hover:text-blue-800">All Solutions</li>
                            <li className="cursor-pointer hover:text-blue-800">Accept Payments</li>
                            <li className="cursor-pointer hover:text-blue-800">Make Payments</li>
                            <li className="cursor-pointer hover:text-blue-800">Manage Risk</li>
                            <li className="cursor-pointer hover:text-blue-800">Accelerate Growth</li>
                            <li className="cursor-pointer hover:text-blue-800">Streamline Operations</li>
                        </ul>
                    </div>
                </div>
                <div className="relative lg:left-16 sm:bottom-28 lg:bottom-0">
                    <h1 className="pt-48 font-semibold text-lg text-blue-800 relative left-10 ">Enterprise</h1>
                    <p className="text-gray-300 relative left-9 bottom-2">________________________________________________________________</p>
                    <div className="md:flex pt-4 cursor-pointer">
                        <ul className="text-lg font-semibold relative left-10">
                            <li className="pb-2 cursor-pointer hover:text-blue-800">Introduction</li>
                            <li className="cursor-pointer hover:text-blue-800">Marketplaces & Partners</li>
                        </ul>
                        <ul className="text-lg relative lg:left-48 sm:left-10 sm:pt-2 lg:pt-0">
                            <li className="font-semibold pb-2 cursor-pointer hover:text-blue-800">Platform & Solutions</li>
                            <li className="cursor-pointer hover:text-blue-800">Accept Payments</li>
                            <li className="cursor-pointer hover:text-blue-800">Make Payments</li>
                            <li className="cursor-pointer hover:text-blue-800">Manage Risk</li>
                            <li className="cursor-pointer hover:text-blue-800">Accelerate Growth</li>
                            <li className="cursor-pointer hover:text-blue-800">Streamline Operations</li>
                        </ul>
                    </div>
                </div>
                <div className="relative lg:left-40 sm:left-10 sm:bottom-56 lg:bottom-0">
                    <h1 className="pt-48 font-semibold text-lg text-blue-800">More</h1>
                    <p className="text-gray-300 relative bottom-2">______________________</p> 
                    <ul className="text-lg font-semibold pt-4 cursor-pointer">
                        <li className="pb-2 cursor-pointer hover:text-blue-800">Nonprofits</li>
                        <li className="pb-2 cursor-pointer hover:text-blue-800">Pricing</li>
                        <li className="pb-2 cursor-pointer hover:text-blue-800">Resource Center</li>
                    </ul>
                </div>
            </div>
            <img className="lg:w-1/6 sm:2/6 pt-16 pl-5 relative sm:bottom-52 lg:bottom-0"src={Paypal} alt="PayPal" />
        </div>

    )
};

export default Footer;