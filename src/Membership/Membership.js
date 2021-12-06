import React from 'react';
import './Membership.css'

const Membership = () => {
    return (
        // <div id="membership" className="mt-5">
        //     <h5 className="common-text-color text-center mb-3">Become a part of our Gym</h5>
        //     <h1 className="text-center mb-4">Membership Packages</h1>
        //     <p className="text-center text-secondary">We offer 3 monthly packages for our customers at a low price.</p>
        //     <p className="text-center text-secondary mb-5">Anyone can buy more than one month at a time</p>
        //     <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        //         <div class="col">
        //             <div class="card card-style">
        //                 <div class="card-body ">
        //                     <h5 className="member-plan my-3 d-flex justify-content-center">Beginner Plan</h5>
        //                     <h1 class="card-title text-center">$30</h1>
        //                     <p className="text-center">Ultimate Equipment</p>
        //                     <p className="text-center">Diet Plans</p>
        //                     <p className="text-center">Workout Plans</p>
        //                     <p className="text-center">Suppliment Guidance</p>
        //                     <p className="text-center">Detox Drinks</p>
        //                     <p className="text-center">Limited Trainer Guidance</p>
        //                     <button className="member-btn-design  d-flex justify-content-center">Buy Now</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="col">
        //             <div class="card card-style">

        //                 <div class="card-body ">
        //                     <h5 className="member-plan my-3 d-flex justify-content-center">Intermediate Plan</h5>
        //                     <h1 class="card-title text-center">$50</h1>
        //                     <p className="text-center">Ultimate Equipment</p>
        //                     <p className="text-center">Diet Plans</p>
        //                     <p className="text-center">Workout Plans</p>
        //                     <p className="text-center">Suppliment Guidance</p>
        //                     <p className="text-center">Detox Drinks</p>
        //                     <p className="text-center">Personal Trainer Guidance</p>
        //                     <button className="member-btn-design  d-flex justify-content-center">Buy Now</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="col">
        //             <div class="card card-style">

        //                 <div class="card-body">
        //                     <h5 className="member-plan my-3 d-flex justify-content-center">Ultimate Plan</h5>
        //                     <h1 class="card-title text-center">$90</h1>
        //                     <p className="text-center">Ultimate Equipment</p>
        //                     <p className="text-center">Diet Plans</p>
        //                     <p className="text-center">Workout Plans</p>
        //                     <p className="text-center">Suppliment Guidance</p>
        //                     <p className="text-center">Detox Drinks</p>
        //                     <p className="text-center">Personal Trainer Guidance</p>
        //                     <button className="member-btn-design  d-flex justify-content-center">Buy Now</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>



        // </div>
        <div className="membership-background mb-3">
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
                    <div className="col">
                        <h3 className="common-text-color mt-3 mb-3">From Beginner to Ultimate</h3>
                        <h6>At SuperFeet, we offer a wide range of membership with options to suit every budget. Everything from Beginner pass and ultimate pass from monthly or annual prepaid memberships. What’s more, we won’t tie you in to a long term contract, giving you greater flexibility.</h6>
                        <p>The best equipment global brands</p>
                        <p>safe payment medthods</p>
                        <p>The gym is open 24 hours a day, 7 days a week</p>
                        <p>unlimited trainer guidance</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;