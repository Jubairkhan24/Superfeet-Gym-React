import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, img, info } = service;
    return (
        <div className="service pb-3 mt-5">
            <img src={img} alt="" />
            <h3 className="mt-3 text-center">{name}</h3>
            {/* <h5>Price: {price}</h5> */}
            <p className="px-3">{info}</p>
            <Link className="btn-style d-flex justify-content-center" to={`/booking/${id}`}>
                <button className="btn btn-design text-center">View Details</button>
            </Link>
        </div>
    );
};

export default Service;