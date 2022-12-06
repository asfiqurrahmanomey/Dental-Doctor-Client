import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <div>
            <section className="">
                <div className="container px-6 py-10 mx-auto">
                    <div className="mt-6 md:flex md:items-center md:justify-between" data-aos="zoom-in" data-aos-duration="3000">
                        <div>
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl">
                                What our clients are saying
                            </h1>

                            <div className="flex mx-auto mt-6">
                                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-8 md:mt-0">
                            <button className="p-2 mx-3 text-sky-500 transition-colors duration-300 border rounded-full rtl:-scale-x-100  dark:hover:bg-gray-800 dark:border-sky-500 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button className="p-2 text-sky-500 transition-colors duration-300 border rounded-full rtl:-scale-x-100  dark:hover:bg-gray-800 dark:border-sky-500 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;