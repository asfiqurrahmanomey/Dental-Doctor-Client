import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="bg-gradient-to-b from-green-100 to-green-100">
                <header>
                    <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="relative flex items-center justify-between lg:justify-center lg:space-x-8">
                            <ul className="items-center hidden space-x-2 lg:flex font-semibold hover:text-orange-600">
                                <li>
                                    <Link to={'/'}

                                        aria-label="Our product"
                                        title="Our product"
                                        className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/'}

                                        aria-label="Our product"
                                        title="Our product"
                                        className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/appointment'}

                                        aria-label="Product pricing"
                                        title="Product pricing"
                                        className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                    >
                                        Appointment
                                    </Link>
                                </li>
                            </ul>
                            <Link to={'/'}

                                aria-label="Company"
                                title="Company"
                                className="inline-flex items-center"
                            >
                                <svg
                                    className="w-8 text-deep-purple-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    stroke="currentColor"
                                    fill="none"
                                >
                                    <rect x="3" y="1" width="7" height="12" />
                                    <rect x="3" y="17" width="7" height="6" />
                                    <rect x="14" y="1" width="7" height="6" />
                                    <rect x="14" y="11" width="7" height="12" />
                                </svg>
                                <span className="ml-2 text-xl font-bold tracking-wide text-sky-500 uppercase">
                                    Doctor Point
                                </span>
                            </Link>
                            <ul className="items-center hidden space-x-2 lg:flex">
                                <li>
                                    <Link to={'/'}

                                        aria-label="Sign in"
                                        title="Sign in"
                                        className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                {
                                    user?.uid ?
                                        <>
                                            <li>
                                                <Link to={'/dashboard'}

                                                    aria-label="About us"
                                                    title="About us"
                                                    className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                >
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <button onClick={handleLogOut}

                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                    className="px-4 py-1 text-base font-semibold text-gray-900 border-2 border-gray-200 rounded-md hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                >
                                                    Sign Out
                                                </button>
                                            </li>
                                        </>
                                        : <li>
                                            <Link to={'/login'}

                                                aria-label="Sign up"
                                                title="Sign up"
                                                className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                }
                            </ul>
                            <div className="lg:hidden">
                                <button
                                    aria-label="Open Menu"
                                    title="Open Menu"
                                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                        />
                                    </svg>
                                </button>
                                {isMenuOpen && (
                                    <div className="absolute top-0 left-0 w-full z-40 ">
                                        <div className="p-5 bg-white border rounded shadow-sm">
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <Link to={'/'}

                                                        aria-label="Company"
                                                        title="Company"
                                                        className="inline-flex items-center"
                                                    >
                                                        <svg
                                                            className="w-8 text-deep-purple-accent-400"
                                                            viewBox="0 0 24 24"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeMiterlimit="10"
                                                            stroke="currentColor"
                                                            fill="none"
                                                        >
                                                            <rect x="3" y="1" width="7" height="12" />
                                                            <rect x="3" y="17" width="7" height="6" />
                                                            <rect x="14" y="1" width="7" height="6" />
                                                            <rect x="14" y="11" width="7" height="12" />
                                                        </svg>
                                                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                            Company
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <button
                                                        aria-label="Close Menu"
                                                        title="Close Menu"
                                                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                            <path
                                                                fill="currentColor"
                                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <nav>
                                                <ul className="space-y-4 mx-auto text-center">
                                                    <li>
                                                        <Link to={'/'}

                                                            aria-label="Our product"
                                                            title="Our product"
                                                            className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                        >
                                                            Home
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'/'}

                                                            aria-label="Our product"
                                                            title="Our product"
                                                            className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                        >
                                                            About
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'/'}

                                                            aria-label="Product pricing"
                                                            title="Product pricing"
                                                            className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                        >
                                                            Appointment
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'/'}

                                                            aria-label="About us"
                                                            title="About us"
                                                            className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                        >
                                                            Reviews
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'/'}

                                                            aria-label="Sign in"
                                                            title="Sign in"
                                                            className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                        >
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                    {
                                                        user?.uid ?
                                                            <>
                                                                <li>
                                                                    <Link to={'/dashboard'}

                                                                        aria-label="About us"
                                                                        title="About us"
                                                                        className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                                    >
                                                                        Dashboard
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <button onClick={handleLogOut}

                                                                        aria-label="Sign up"
                                                                        title="Sign up"
                                                                        className="px-4 py-1 text-base font-semibold text-gray-900 border-2 border-gray-200 rounded-md hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                                    >
                                                                        Sign Out
                                                                    </button>
                                                                </li>
                                                            </>
                                                            : <li>
                                                                <Link to={'/login'}

                                                                    aria-label="Sign up"
                                                                    title="Sign up"
                                                                    className="px-6 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                                                                >
                                                                    Login
                                                                </Link>
                                                            </li>
                                                    }
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden float-left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </header>

                {/* <section className=" bg-gradient-to-b from-green-100 to-green-100 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative">
                            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                            </div>

                            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                                <div>
                                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                        <HiOutlineClock className='w-16 h-16text-sky-500'></HiOutlineClock>
                                    </div>
                                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Opening Hours</h3>
                                    <p className="mt-4 text-base text-gray-600">Sunday to Friday 24/7</p>
                                </div>

                                <div>
                                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                        <HiOutlineLocationMarker className='w-16 h-16text-sky-500'></HiOutlineLocationMarker>
                                    </div>
                                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Visit our location</h3>
                                    <p className="mt-4 text-base text-gray-600">Brooklyn, NY 10036, United States.</p>
                                </div>

                                <div>
                                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                        <HiOutlinePhoneOutgoing className='w-14 h-14text-sky-500'></HiOutlinePhoneOutgoing>
                                    </div>
                                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Contact us now</h3>
                                    <p className="mt-4 text-base text-gray-600">+8801785948127</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

            </div >
        </div >
    );
};

export default NavBar;