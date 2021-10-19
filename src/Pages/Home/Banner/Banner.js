import React from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css'

const Banner = () => {

    const history = useHistory();

    const contactButton = () => {
        history.push('./login');
    }
    // const courseButton = () => {
    //     history.push('./home#services')
    // }

    return (

        <div>
            <div className="background-banner">
                <div className=" container home-text-style">
                    <h2 className="d-flex text-start">Welcome to the </h2>
                    <h1 className="d-flex text-start fw-bolder fs-1">Superfeet Gym and</h1>
                    <h2 className="d-flex text-start fw-bolder fs-1">Yoga training Center</h2>
                </div>
                <div className="py-5 container d-flex justify-content-start">
                    {/* <button onClick={} className=" btn-design-banner btn btn-lg ">Start Course</button> */}
                    <button onClick={contactButton} className=" btn-design-banner btn btn-lg">Join Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;