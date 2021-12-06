import React from 'react';
import './Membership.css'

const Membership = () => {
    return (
        <div id="membership" className="membership-background mb-3">
            <h5 className="my-3 mt-4">become a part of our gym</h5>
            <h1 className="mt-3 mb-4">Membership Packages</h1>
            <div className="container ">
                <div className="row mt-5">
                    <div className="col">
                        <div class="row align-items-center">
                            <div className="col">
                                <div className="card text-center card-style" style={{ width: '18rem' }}>
                                    <div className="card-body ">
                                        <h3 className="card-title border rounded border-success my-3">Beginner Plan</h3>
                                        <h1 className="common-text-color">$50</h1>
                                        <p className="card-text">Ultimate Equipment</p>
                                        <p className="card-text">Diet Plans</p>
                                        <p className="card-text">Workout Plans</p>
                                        <p className="card-text">Suppliment Guidance</p>
                                        <p className="card-text">Limited Trainer Guidance</p>
                                        <button className="btn member-btn-design">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center card-style" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h3 className="card-title border rounded border-success my-3">Ultimate Plan</h3>
                                        <h1 className="common-text-color">$90</h1>
                                        <p className="card-text">Ultimate Equipment</p>
                                        <p className="card-text">Diet Plans</p>
                                        <p className="card-text">Workout Plans</p>
                                        <p className="card-text">Suppliment Guidance</p>
                                        <p className="card-text">Detox Drinks</p>
                                        <p className="card-text">Personal Trainer Guidance</p>
                                        <button className="btn member-btn-design">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <div className="w-75">
                            <h3 className="common-text-color mt-3 mb-5">From Beginner to Ultimate</h3>
                            <h6>At SuperFeet, we offer a wide range of membership with options to suit every budget. Everything from Beginner pass and ultimate pass from monthly or annual prepaid memberships. What’s more, we won’t tie you in to a long term contract, giving you greater flexibility.</h6>
                            <p className="common-text-color">The best equipment global brands</p>
                            <p>safe payment medthods</p>
                            <p className="common-text-color">The gym is open 24 hours a day, 7 days a week</p>
                            <p>unlimited trainer guidance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;