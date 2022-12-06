import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    // * Data Load using UseQuery * //
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointment-Time', date],
        queryFn: async () => {
            const res = await fetch(`https://doctor-service-server-five.vercel.app/v2/appointment-Time?date=${date}`);
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='py-16 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <p className='text-xl mb-6 font-bold text-sky-500'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;