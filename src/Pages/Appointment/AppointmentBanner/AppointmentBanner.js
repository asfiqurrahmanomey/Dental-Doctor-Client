import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    


    return (
        <div>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className='mx-auto shadow-xl bg-white rounded-lg' data-aos="fade-right" data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                            {/* <div className="my-6">
                                <span>Your Selected Date: {format(selectedDate, 'PP')}</span>
                            </div> */}
                        </div>

                        <div data-aos="fade-left" data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <img className="w-full hover:scale-110 transition duration-300 ease-in-out" src="https://www.hashstudioz.com/images/health-care-consultation.svg" alt="" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppointmentBanner;