import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import NewsLetter from '../elements/NewsLetter';
import PageTitle from '../elements/PageTitle';

const pricingPlans = [
    { rate: '2400', title: 'Basic', prime: 'premium' },
    { rate: '1800', title: 'Standard', billed: 'billed bi-annualy' },
    { rate: '1600', title: 'Pro', billed: 'billed anually' },
];

const Pricing = () => {
    const [hoverEffect, setHoverEffect] = useState(1);
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage={'Pricing'} parentTitle="Membership" />
                <section className="content-inner rounded-shape-top overflow-hidden" style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}>
                    <div className="container">
                        <div className="row">
                            {pricingPlans.map((plan, ind) => (
                                <div className="col-lg-4 col-md-6 m-b30" key={ind}>
                                    <div className={`pricingtable-wrapper box-hover style-1 ${ind === hoverEffect ? 'active' : ''}`}
                                        onMouseEnter={() => setHoverEffect(ind)}
                                    >
                                        <div className="pricingtable-inner">
                                            <div className={`pricingtable-title ${plan.prime}`} >{plan.title}</div>

                                            <div className="pricingtable-price">
                                                <h2 className="pricingtable-bx text-primary"><small>INR</small> {plan.rate}<small>/ Month</small></h2>
                                                {!plan.prime && (
                                                    <p>{plan.billed}</p>
                                                )}
                                                <p>Get access to top-notch facilities and training</p>
                                            </div>
                                            <ul className="pricingtable-features">
                                                <li>Unlimited Gym Access</li>
                                                <li>Free Group Classes</li>
                                                <li>Personal Training Sessions</li>
                                                <li>Nutrition Plans</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <Link to={"/contact-us"} className="btn btn-primary btn-skew"><span>Join Now</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Pricing;
