import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../../assets/images/treatment.png'

const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:space-x-20">
                <div className="relative grid-cols-1" data-aos="fade-down-right" data-aos-duration="1000">
                    <img
                        className="hover:scale-110 transition duration-300 ease-in-out object-cover w-full h-60 rounded-xl shadow-lg sm:h-96"
                        src={treatment}
                        alt=""
                    />
                </div>
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 grid-cols-1 " data-aos="fade-down-left" data-aos-duration="1000">
                    <div className="max-w-xl mb-6 md:mt-12">
                        <h2 className="max-w-lg mt-4 mb-6 text-3xl font-bold tracking-tight text-justify text-gray-700 sm:text-4xl sm:leading-none">
                            Exceptional Dental <br /> Care, on Your Terms
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg text-justify">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                    </div>
                    <div className="flex flex-col items-center sm:flex-row md:flex-row">
                        <Link title="" className="inline-flex rounded-lg items-center justify-center px-6 py-2 text-base font-semibold  text-white  bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500" role="button">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;