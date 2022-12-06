import { useQuery } from '@tanstack/react-query';
import { info } from 'daisyui/src/colors/colorNames';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }


    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctor-service-server-five.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteDctr = doctor => {
        fetch(`https://doctor-service-server-five.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }
                refetch();
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl mb-2 my-6 text-sky-500 font-bold drop-shadow-lg shadow-red-500' data-aos="zoom-in" data-aos-duration="3000">Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto w-full" data-aos="fade-left" data-aos-duration="3000">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor.name}
                                </td>
                                <td>
                                    {doctor.email}
                                </td>
                                <td>
                                    {doctor.specialty}
                                </td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-ghost ">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are You Sure You Want to DELETE`}
                    message={`If you delete ${deletingDoctor.name}. It cant be restore`}
                    successAction={handleDeleteDctr}
                    successButtonName="Delete"
                    dataModal={deletingDoctor}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;