import React from "react";
import Contact from "../photos/Contact.png";
import connected from "../photos/connected.png";
import innovative from "../photos/innovative.png";
import intelligent from "../photos/intelligent.png";
import platform from "../photos/platform.png";
import p1 from "../photos/p1.png";
import processing from "../photos/processing.png";
import brands from "../photos/brands.png";
import founder from "../photos/founder.png";
import team from "../photos/team.png";
import developer from "../photos/developer.png";


const Middle = () => {
    return (
        <div>
            <div className="md:px-12 max-w-screen-2xl mx-auto mt-24 bg-blue-900 lg:flex ">
                <div className="pt-28 pl-8">
                    <h1 className="text-5xl w-3/4 pl-10 text-white">Capture the full potential of commerce</h1>
                    <p className="text-white w-3/5 pl-10 pt-9 text-xl">PayPal helps business find active buyers, increase conversion across channels, and scale into new markets.</p>
                    <button className="bg-white text-blue-800 py-3 px-3 relative left-10 top-14 text-xl font-medium rounded-full border border-blue-800">Contact Sales</button>
                </div>
                <img className="md:w-1/3 md:h-2/5 pb-0 pt-20 pr-14 items-center relative sm:left-8 lg:left-0" src={Contact} alt="Man using phone"/>
            </div>
            <div className="md:px-12 max-w-screen-2xl mx-auto bg-gray-100 lg:flex">
                <div className="pt-60 pl-8 mb-24">
                    <h1 className="font-saus text-6xl w-4/5 tracking-widest">PayPal is trusted by businesses and consumers around the world</h1>
                </div>
                <div>
                    <div class="w-80 h-14 px-16 py-4 bg-white rounded-tl-xl rounded-tr-xl font-medium text-xl relative left-40 top-20 shadow-xl flex border-t-2">PayPal Assistent    
                        <div className="pl-6 text-3xl">^</div>
                    </div>
                    <div className="md:flex tracking-widest"> 
                     <div className="pt-36 relative right-30 sm:left-20 lg:left-0">
                        <h1 className="text-green-700 text-5xl font-semibold ">400+</h1>
                        <p className="text-2xl pt-3 text-gray-600 ">million active customers</p>
                     </div>
                     <div className="pt-36 relative right-1 sm:left-20 lg:left-0 ">
                        <h1 className="text-green-700 text-5xl font-semibold">200+ </h1>
                        <p className="text-2xl pt-3 text-gray-600">markets around the globe</p>
                     </div>
                    </div>
                    <div class="relative right-30 sm:left-8 lg:left-0 pt-5 text-gray-300">____________________________________________________________________</div>
                    <div className="md:flex tracking-widest pb-20">
                     <div className="pt-16 relative right-30 sm:left-20 lg:left-0">
                        <h1 className="text-green-700 text-5xl font-semibold">20+ </h1>
                        <p className="text-2xl pt-3 text-gray-600 ">years of experience</p>
                     </div>
                     <div className="pt-16 relative lg:left-12 sm:left-20 ">
                        <h1 className="text-green-700 text-5xl font-semibold">30+ </h1>
                        <p className="text-2xl pt-3 text-gray-600">million merchants</p>
                     </div>
                    </div>
                </div>
            </div>
            <div className="md:px-12 max-w-screen-2xl mx-auto bg-white">
                <div>
                    <h1 className="text-5xl pt-32 text-center w-full pl-22">Our connections, innovation, and intelligence make PayPal your strategic partner </h1>
                    <div className="md:flex pb-28">
                        <div className="pt-20">
                            <img className="w-24 h-24 relative left-52" src={connected} alt="connected"/>
                            <h1 className="text-5xl pl-36 pt-8">Connected</h1>
                            <h1 className="text-xl pt-8 w-3/4 text-center relative lg:left-20 sm:left-14">PayPal is a single point of entry to payments expertise, tools, technology, and data that can help you compete and win.</h1>
                        </div>
                        <div className="pt-20">
                            <img className="w-24 h-24 relative left-52" src={innovative} alt="connected"/>
                            <h1 className="text-5xl pl-36 pt-8">Innovative</h1>
                            <h1 className="text-xl pt-8 w-4/5 text-center relative lg:left-20 sm:left-14">Stay agile, ahead of trends, and help safeguard against economic uncertainty with modular solutions that are easy to operationalize.</h1>
                        </div>
                        <div className="pt-20">
                            <img className="w-24 h-24 relative left-52" src={intelligent} alt="connected"/>
                            <h1 className="text-5xl pl-36 pt-8">Intelligent</h1>
                            <h1 className="text-xl pt-8 w-2/3 text-center relative lg:left-20 sm:left-14">With one of the world's largest data sets, we help you understand customer behaviours, detect fraud, and capture more revenue across channels, devices, and markets.</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className="md:px-12 max-w-screen-2xl mx-auto bg-zinc-800 lg:flex">
                    <img className="w-2/4 h-2/5 relative left-16 top-12" src={platform} alt="payment"/>
                    <div className="relative sm:bottom-20 lg:bottom-0">
                        <h1 className="text-white text-5xl w-2/3 pt-52 relative left-40">Harness our powerful platform</h1>
                        <h1 className="text-white text-xl w-2/3 pt-10 relative left-40">Accelerate growth and easily scale with our flexible features and tools that can be customized for your exact use cases</h1>
                        <div className="flex text-cyan-300 pt-8 font-semibold relative left-40">   
                            <button className="text-xl hover:text-white">Learn about our platform</button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-10 pl-2 hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg></button>
                        </div>
                    </div>
            </div>
            <div className="md:px-12 max-w-screen-2xl mx-auto bg-white lg:flex pb-12">
                <div> 
                    <h1 className="pt-32 text-5xl w-4/5 relative left-16">Leverge our dedicated customer network</h1>
                    <h1 className="text-xl w-4/5 relative left-16 pt-10">Our global network of 400+ million active accounts buys more and buys more often with PayPal.</h1>
                    <div className="flex text-blue-400 pt-8 font-semibold relative left-16">   
                        <button className="text-xl hover:text-blue-800">Learn about our extensive network</button>
                        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-10 pl-2 hover:text-blue-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></button>
                    </div>
                </div>
                <img className="w-7/12 h-2/4 pt-36 relative right-20 sm:left-20 lg:left-0"src={p1} alt="paypal_user"/>
            </div>
            <div className="md:px-12 max-w-screen-2xl mx-auto bg-emerald-900 lg:flex">
                <img className="w-2/4 pt-10 relative left-10"src={processing} alt="processing"/>
                <div className="relative sm:bottom-12 lg:bottom-0"> 
                    <h1 className="text-white pt-28 text-5xl w-3/5 relative left-36">Optimize your payment processing</h1>
                    <h1 className="text-white text-xl w-3/5 relative left-36 pt-10">Our mix of tools, technology, relationships, and data can help you process more transactions successfully and capture more revenue.</h1>
                    <div className="flex text-cyan-300 pt-6 font-semibold relative left-36">   
                        <button className="text-xl hover:text-white">Learn how to optimize payment processing</button>
                        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-10 pl-2 relative hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></button>
                    </div>
                </div>
            </div>
            <div className="md:px-12 max-w-screen-2xl mx-auto bg-white">
                <h1 className="pt-28 text-4xl text-center lg:w-3/5 sm:w-4/5 relative lg:left-72 sm:left-10">We Help drive growth for some of the world's most forward looking brands</h1>
                <img className="pt-16 pb-28 w-4/5 relative lg:left-44 sm:left-10"src={brands} alt="brands"/>
            </div>
            <div className="md:px-12 max-w-screen-2xl mx-auto bg-blue-800 lg:flex">
                <div className="text-white pt-44 relative left-16">
                    <h1 className="text-2xl w-2/3">The truth must be told. We are here because of PayPal. I am inspired by what PayPal is doing and we want to continue to grow with PayPal.</h1>
                    <p className="pt-4 text-lg">Vipin Sahu</p>
                    <p className="text-lg">Co-Founder</p>
                    <h1 className="font-bold pt-3">Webkul</h1>
                </div>
                <img className="w-2/5 h-2/5 relative right-16 bottom-16 sm:left-72 lg:left-0" src={founder} alt="note"/>
            </div>
            <div className="md:px-12 pb-12 max-w-screen-2xl mx-auto bg-gray-200">
              <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-6 pt-12">
                  <div className="p-2 pb-40 bg-white w-11/12 relative left-6">
                     <img className="w-11/12 relative left-5 top-10"src={team} alt="developer"/>
                     <h1 className="text-4xl pt-20 relative left-5">Contact our sales team</h1>
                     <p className="text-2xl pt-5  w-4/5 relative left-6">Learn how payments can be leveraged as a catalyst for growth.</p>
                     <button className="bg-blue-500 text-white py-3 px-6 rounded-full border border-blue-500 hover:bg-white hover:text-blue-500 text-xl font-semibold relative left-8 top-24">Contact Sales</button>

                  </div>
                  <div className="p-2 pb-40 bg-white w-11/12 relative left-4">
                      <img className="w-11/12 relative left-5 top-10" src={developer} alt="developer"/>
                      <h1 className="text-4xl pt-20 relative left-6">Explore developer documentation</h1>
                      <p className="text-2xl relative left-6 pt-5 sm:w-10/12 lg:w-11/12">See how our flexible and interoperable technology helps to simplify integration.</p>
                     <button className="bg-blue-500 text-white py-3 px-6 rounded-full border border-blue-500 hover:bg-white hover:text-blue-500 text-xl font-semibold relative top-24 left-8">Visit Developer Docs</button>
                  </div>
              </div>
            </div>
        </div>

    )
};

export default Middle;