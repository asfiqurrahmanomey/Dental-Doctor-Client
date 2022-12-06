import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate()

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctor-service-server-five.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                // getUserToken(email);

            })
    }

    // const getUserToken = email => {
    //     fetch(`https://doctor-service-server-five.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken);
    //                 navigate('/');
    //             }
    //         })
    // }

    return (
        <div>
            <div className='h-[800px] flex justify-center items-center mx-auto'>
                <div className='w-96 p-7 bg-white shadow-lg rounded-lg' data-aos="zoom-in" data-aos-duration="3000">
                    <h2 className='text-2xl'>Sign UP</h2>
                    <form onSubmit={handleSubmit(handleSignUp)} >

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
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "Password Required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must Have UpperCase LowerCase & Spacial Character" }
                            })} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        </div>
                        <input type="submit" value="signup" className='my-4 w-full  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500' />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <p>Already Have an Account? <Link to={'/login'} className='text-sky-500'>Login Here</Link></p>
                    <div className="divider">OR</div>
                    <button className='my-4 w-full  px-2 uppercase inline-flex items-center justify-center py-2 font-medium border-double border-4 border-gray-700  bg-gray-400 text-white rounded-lg'>CONTINUE WITH GOOGLE
                        <svg className='ml-4' width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;