import React from 'react';
import About from '../About/About';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import ContactInfo from './ContactInfo/ContactInfo';
import Hero from './Hero/Hero';


const Home = () => {

    return (
        <div className='bg-gradient-to-b from-green-100 to-green-100'>
                <Hero></Hero>
                <ContactInfo></ContactInfo>
                <Services></Services>
                <About></About>
                <AppointmentCard></AppointmentCard>
                <Testimonial></Testimonial>
                <ContactUs></ContactUs>
            

        </div>
    );
};

export default Home;