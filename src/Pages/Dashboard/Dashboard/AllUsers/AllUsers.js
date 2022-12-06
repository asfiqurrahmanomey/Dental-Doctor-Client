import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { info } from 'daisyui/src/colors/colorNames';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctor-service-server-five.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    const handleMakeAdmin = id => {
        fetch(`https://doctor-service-server-five.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin updated successfully')
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl my-6 text-sky-500 font-bold' data-aos="zoom-in" data-aos-duration="3000">All Users</h2>
            <div className="overflow-x-auto" data-aos="fade-left" data-aos-duration="3000">

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeAdmin(user._id)} className=' rounded-lg px-6 py-2 text-base font-semibold  text-white bg-gray-600'>Make Admin</button>
                                }</td>
                                <td><button className="btn btn-square btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;