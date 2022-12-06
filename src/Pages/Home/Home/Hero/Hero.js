import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div>
            
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div data-aos="zoom-out-right" data-aos-duration="1000" 
                            data-aos-easing="ease-in-sine"> 
                            <h1 className="text-4xl font-bold text-gray-700 sm:text-6xl lg:text-7xl">
                                Your New Smile
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#0BB2D7]"></span>
                                    <h1 className="relative text-4xl font-bold text-gray-700 sm:text-6xl lg:text-7xl">Starts Here.</h1>
                                </div>
                            </h1>

                            <p className="mt-8 text-base text-gray-700 sm:text-xl">Give Your Healthcare System A
                                Digital Leap With An Efficient And
                                Effective Patient Consultation
                                Platform.</p>

                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <Link title="" className="inline-flex rounded-lg items-center justify-center px-6 py-2 text-base font-semibold  text-white  bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500" role="button">Get Start</Link>

                                <Link title="" className="animate-bounce inline-flex items-center mt-6 text-base font-semibold transition-all duration-500 sm:mt-0">
                                    <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/5000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Watch video
                                </Link>
                            </div>
                        </div>

                        <div data-aos="zoom-out-left" 
                            data-aos-easing="ease-in-sine" data-aos-duration="1000">
                            <img className="w-full hover:scale-110 transition duration-300 ease-in-out" src="https://www.hashstudioz.com/images/health-care-consultation.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;