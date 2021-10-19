import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className="container">
            <h2 className="common-text-color mt-5 text-center">Popular Classes</h2>
            <h5 className="common-text-color text-center">Explore the beauty of good health</h5>
            <div className="service-container mt-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;