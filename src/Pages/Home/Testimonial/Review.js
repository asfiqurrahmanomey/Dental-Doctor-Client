import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div>
            <div className="p-8 bg-white border border-transparent shadow-lg rounded-lg hover:-translate-y-2" data-aos="zoom-in" data-aos-duration="3000">
                <p className="leading-loose">
                    “{userReview}”.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-sky-500" src={img} alt="" />

                    <div className="mx-2">
                        <h1 className="font-semibold">{name}</h1>
                        <span className="text-sm text-sky-500">{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;