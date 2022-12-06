import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    return (
        <div>
            <div className="">
                <div className="container px-6 py-8 mx-auto" data-aos="zoom-in" data-aos-duration="3000">
                    <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center rounded-lg lg:mx-4 shadow-lg bg-white ">
                            <div className="flex-shrink-0">
                                <p className="inline-flex items-center justify-center text-sm px-2 font-semibold tracking-tight text-sky-500 uppercase rounded-lg">
                                    {name}
                                </p>
                            </div>

                            <ul className="flex-1 space-y-2">
                                <li className="text-black ">
                                    {slots.length > 0 ? slots[0] : 'Try Another Day'}
                                </li>

                                <li className="text-black ">
                                    {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
                                </li>
                                
                                <p>Price: ${price}</p>

                            </ul>

                            <div className='flex  justify-around'>
                                <label onClick={() => setTreatment(appointmentOption)}
                                    htmlFor="booking-modal" className="px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-2 hover:from-pink-500 hover:to-yellow-500">Book Appointment</label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;