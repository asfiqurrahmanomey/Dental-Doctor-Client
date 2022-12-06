import React from 'react';
import { Link } from 'react-router-dom';
import doctorsmall from '../../../assets/images/doctorsmall.png'
import appointment from '../../../assets/images/appointment.png'

const AppointmentCard = () => {
    return (
        <div>
            <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div data-aos="fade-up-right" data-aos-duration="1000">
                            <h2 className="text-lg mb-4 font-bold leading-tight sm:text-xl lg:text-xl text-sky-500">Appointment</h2>
                            <h2 className="text-3xl text-gray-700 font-bold leading-tight sm:text-4xl lg:text-5xl ">Make an Appointment Today 👋</h2>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed md:mt-8 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                        </div>

                        <div className="relative" data-aos="fade-up-left" data-aos-duration="1000">
                            <img className=" absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                            <img className=" relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={doctorsmall} alt="" />
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default AppointmentCard;