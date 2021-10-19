import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CourseDetail = () => {
    const { serviceId } = useParams();
    const [Detail, setDetail] = useState([])
    useEffect(() => {
        fetch(serviceId)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>
            {
                Detail.find(detail => detail.serviceId)
            }
            {/* <h2>this is product: {serviceId}</h2> */}
        </div>
    );
};

export default CourseDetail;