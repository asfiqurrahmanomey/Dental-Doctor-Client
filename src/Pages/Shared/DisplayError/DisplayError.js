import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className='text-red-500 text-2xl' Something Wrong Happen></p>
            <p className='text-red-500 text-lg'>
                {error.statusText || error.message}
            </p>
            <h1 className='text-sky-500 text-xl'>
                Please
                <button onClick={handleLogOut}
                    aria-label="Sign up"
                    title="Sign up"
                    className="px-4 py-1 text-base font-semibold text-gray-900 border-2 border-gray-200 rounded-md hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                >
                    Sign Out
                </button> & Login
            </h1>
        </div>
    );
};

export default DisplayError;