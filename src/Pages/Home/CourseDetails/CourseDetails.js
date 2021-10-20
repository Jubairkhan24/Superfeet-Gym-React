import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);

    const [singleServiceCard, setSingleServiceCard] = useState({});

    useEffect(() => {
        fetch('/singleService.json')
            .then((res) => res.json())
            .then((data) => setServiceDetails(data.service));
    }, []);

    useEffect(() => {
        const afterService = serviceDetails.find(
            (service) => service.id == serviceId
        );
        setSingleServiceCard(afterService);
    }, [serviceDetails, serviceId]);

    return (
        <div>
            {/* <h2>this is course: {serviceId}</h2> */}

            <div>
                {/* <h1>{serviceId}</h1> */}
                <h2 className="common-text-color my-5">{singleServiceCard?.name}</h2>
                <Container className="d-flex justify-content-center">
                    <Row className="d-flex justify-content-center">
                        <Col md={4}>
                            <Card className="">
                                <Card.Img variant="top" src={singleServiceCard?.img} />
                            </Card>
                        </Col>
                        <Col md={5}>
                            <Card className="py-5" style={{}}>
                                <Card.Body>
                                    <Card.Title className="fs-1 common-text-color mb-5
                                    ">{singleServiceCard?.name}</Card.Title>
                                    <Card.Text className="h5">
                                        <b> <span className="common-text-color">Info: </span> {singleServiceCard?.info}</b>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CourseDetail;