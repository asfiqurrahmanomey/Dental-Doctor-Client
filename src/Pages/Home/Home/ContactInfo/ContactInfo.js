import React from 'react';
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlinePhoneOutgoing } from "react-icons/hi";

const ContactInfo = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
                <div className=" bg-gradient-to-r h-full from-cyan-500 to-blue-500 hover:-translate-y-2 rounded-xl hover:from-pink-500 hover:to-yellow-500" data-aos="fade-right"  data-aos-duration="3000">
                    <div className="flex h-full p-5 shadow-sm items-center duration-300 transform">
                        <HiOutlineClock className='w-20 h-20 mr-2 text-white'></HiOutlineClock>
                        <div className='text-justify text-white'>
                            <h6 className="mb-2 font-semibold leading-5">Opening Hours</h6>
                            <p className="text-sm">
                                Sunday to Friday | 24/7.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="duration-300 transform bg-gray-700 hover:-translate-y-2 rounded-xl" data-aos="zoom-in"  data-aos-duration="3000">
                    <div className="flex h-full p-5 shadow-sm items-center">
                        <HiOutlineLocationMarker className='w-20 h-20 mr-2 text-white'></HiOutlineLocationMarker>
                        <div className='text-justify text-white'>
                            <h6 className="mb-2 font-semibold leading-5">Visits Our Location</h6>
                            <p className="text-sm">
                                141/9 Collage Mor, Jhalokathi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-2 rounded-xl hover:from-pink-500 hover:to-yellow-500" data-aos="fade-left"  data-aos-duration="3000">
                    <div className="flex h-full p-5 shadow-sm items-center">
                        <HiOutlinePhoneOutgoing className='w-20 h-20 mr-2 text-white'></HiOutlinePhoneOutgoing>
                        <div className='text-justify text-white'>
                            <h6 className="mb-2 font-semibold leading-5">Contact Us On</h6>
                            <p className="text-sm">
                                +8801785948127
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;