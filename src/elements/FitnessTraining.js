import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/theme';

const DzMedia = ({ Image }) => {
    return (
        <div className="col-xl-3 col-md-6">
            <div className="dz-media">
                <img src={Image} alt="" />
            </div>
        </div>
    )
}

const DzInfo1 = ({ title, subtitle, desc }) => {
    return (
        <div className="col-xl-3 col-md-6">
            <div className="dz-info bg-secondary">
                <div className="clearfix text-white">
                    <span className="text-primary subtitle">{title}</span>
                    <h4 className="title text-white">{subtitle}</h4>
                    <p>{desc}</p>
                    {/* <div className="btn btn-primary btn-skew"><span>Read More</span></div> */}
                </div>
            </div>
        </div>
    )
}

const DzInfo2 = ({ title, subtitle, desc }) => {
    return (
        <div className="col-xl-3 col-md-6">
            <div className="dz-info bg-primary">
                <div className="clearfix theme-text-color">
                    <span className="subtitle">{title}</span>
                    <h4 className="title theme-text-color">{subtitle}</h4>
                    <p>{desc}</p>
                    {/* <div className="btn btn-secondary btn-skew"><span>Read More</span></div> */}
                </div>
            </div>
        </div>
    )
}

const FitnessTraining = () => {
    return (
        <>
            <div className="row g-0">
                <DzInfo1 title="BODY SHAPE" subtitle="CROSSFIT" />
                <DzMedia Image={IMAGES.portfolio1} />
                <DzInfo2 title="RELAX PROGRAM" subtitle="BODY BALANCE" />
                <DzMedia Image={IMAGES.portfolio2} />
                <DzMedia Image={IMAGES.portfolio3} />
                <DzInfo2 title="CARDIO WORKFLOW" subtitle="CARDIO" />
                <DzMedia Image={IMAGES.portfolio4} />
                <DzInfo1 title="POWER-PRO" subtitle="WEIGHT LIFTING" />
            </div>
        </>
    );
};

export default FitnessTraining;