import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imageBB_key;

    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['Specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctor-service-server-five.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url);
                }
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imageData.data.url
                }

                // Save Doctor information
                fetch('https://doctor-service-server-five.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success(`${data.name} is Added Successfully`);
                        navigate('/dashboard/managedoctors')
                    })

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-10'>
            <h2 className='text-2xl mb-2 text-sky-500 font-bold drop-shadow-lg shadow-red-500' data-aos="zoom-in" data-aos-duration="3000">Add A Doctor</h2>
            <div className='w-96 p-7 bg-white shadow-lg rounded-lg' data-aos="zoom-in" data-aos-duration="3000">
                <form onSubmit={handleSubmit(handleAddDoctor)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"

                            {...register("name", {
                                required: "Name Required",
                            })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: true
                        })} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select
                            {...register('specialty')}
                            className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pick a Specialty</option>
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="file"

                            {...register("image", {
                                required: "Photo Required",
                            })} placeholder="Type here" className="input input-bordered w-full max-w-xs p-20" />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>

                    <input type="submit" value="Add Doctor" className='my-4 w-full  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500' />
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;