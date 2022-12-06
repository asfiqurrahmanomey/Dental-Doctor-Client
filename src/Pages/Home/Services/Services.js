import React from 'react';
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
    return (
        <div>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className='text-lg font-bold text-sky-500 mb-4'>Our Services</h2>
                        <h2 className="text-3xl font-bold leading-tight text-gray-700 sm:text-4xl lg:text-5xl">Services<span className="text-sky-500">We</span>Provide</h2>
                    </div>

                    <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">

                        <div className="overflow-hidden bg-white rounded-2xl shadow hover:scale-110 transition duration-300 ease-in-out" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="px-8 py-12">
                                <div className="relative w-24 h-24 mx-auto">
                                    <img className="relative w-24 h-24 mx-auto" src={fluoride} alt="" />
                                </div>
                                <p className="text-base font-semibold tex-gray-700 mt-9">Fluoride Treatment</p>
                                <p className="mt-1 text-base text-gray-600">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-2xl shadow hover:scale-110 transition ease-in-out" data-aos="zoom-in-down" data-aos-duration="2000">
                            <div className="px-8 py-12 ">
                                <div className="relative w-24 h-24 mx-auto">
                                    <img className="relative w-24 h-24 mx-auto" src={cavity} alt="" />
                                </div>
                                <p className="text-base font-semibold tex-gray-700 mt-9">Cavity Filling</p>
                                <p className="mt-1 text-base text-gray-600">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-2xl shadow hover:scale-110 transition duration-300 ease-in-out" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="px-8 py-12">
                                <div className="relative w-24 h-24 mx-auto">
                                    <img className="relative w-24 h-24 mx-auto" src={whitening} alt="" />
                                </div>
                                <p className="text-base font-semibold tex-gray-700 mt-9">Teeth Whitening</p>
                                <p className="mt-1 text-base text-gray-600">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;