import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots, price  } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price

        }

        fetch('https://doctor-service-server-five.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking was successfully');
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative" data-aos="zoom-in" data-aos-duration="1000">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-sky-500">{treatmentName}</h3>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-4'>

                        <input type="text" value={date} className="my-1 input input-bordered w-full bg-gray-300" readOnly />
                        <select name='slot' className="select select-bordered w-full bg-gray-300">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Name" defaultValue={user?.displayName} disabled className="my-1 input input-bordered w-full " />
                        <input name='phone' type="phone" placeholder="Phone" className="my-1 input input-bordered w-full " />
                        <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} disabled className="my-1 input input-bordered w-full " />
                        <input className=' w-full  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;