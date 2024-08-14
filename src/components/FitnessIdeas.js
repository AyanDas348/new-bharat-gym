import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/theme';

const boxWrapper = [
    {image: IMAGES.boxlog1, title: "Right Nutrition", description: "Discover the best nutrition plans tailored to your needs."},
    {image: IMAGES.boxlog2, title: "Health & Fitness", description: "Achieve a balanced lifestyle with our expert fitness advice."},
    {image: IMAGES.boxlog3, title: "Gym & Exercise", description: "Explore effective workout routines to reach your fitness goals."},
    {image: IMAGES.boxlog4, title: "Health Motivation", description: "Stay motivated with tips and stories that inspire healthy living."},
];

const FitnessIdeas = () => {
    const [hoverBox, setHoverBox] = useState(0);
    return (
        <>
            <div className="row">
                {boxWrapper.map((item, index) => (
                    <div className="col-xl-3 col-md-6 m-b30" key={index}>
                        <div 
                            className={`icon-bx-wraper style-1 box-hover ${ index === hoverBox ? 'active' : ''}`} 
                            onMouseEnter={() => setHoverBox(index)}
                        >
                            <div className="icon-bx m-b30"> 
                                <span className="icon-cell">
                                    <img src={item.image} alt=""/>
                                </span>
                            </div>
                            <div className="icon-content">
                                <h5 className="dz-title m-b10">
                                    <Link to={"/services-details"}>{item.title}</Link>
                                </h5>
                                <p className="m-b25">{item.description}</p>
                                {/* <span className="btn btn-primary shadow-primary btn-skew"><span>Read More</span></span> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
        </>
    );
};

export default FitnessIdeas;
