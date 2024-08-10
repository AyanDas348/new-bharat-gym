import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "react-modal-video/css/modal-video.min.css";

import ClientSlider from "../components/ClientSlider";
import FitnessIdeas from "../components/FitnessIdeas";
import CounterBlog from "../components/CounterBlog";
import FitnessGoal from "../components/FitnessGoal";

//Components
import PerfectTrainers from "../components/PerfectTrainers";
import { IMAGES, SVGICON } from "../constants/theme";
import NewsLetter from "../elements/NewsLetter";
import MainBanner3 from "../components/MainBanner3";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme-color", 'color_1');
    localStorage.setItem("theme", "color_1");
    localStorage.setItem("themeInd", 0);
  }, [location]);
  return (
    <>
      <div className="page-content bg-white">
        <div className="main-bnr-two" style={{ minHeight: '100vh'}}>
          <div
            className="banner-inner"
            style={{
              backgroundImage: `url(${IMAGES.BackgroundBg15})`,
              backgroundSize: "cover",
              minHeight: '100vh'
            }}
          >
            <MainBanner3 open={setOpen} />
          </div>
        </div>
        <section className="content-inner about-wrapper1 about-bx1">
          <div className="container">
            <div className="row align-items-center">
              <PerfectTrainers />
            </div>
          </div>
        </section>
        <section className="counter-wrapper1">
          <div className="container">
            <div className="counter-inner bg-dark">
              <div className="row">
                <CounterBlog />
              </div>
              <svg
                className="triangle1"
                width="250"
                height="70"
                viewBox="0 0 250 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M250 32L0 70L40 0L250 32Z"
                  fill="url(#paint0_linear_58_264)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_58_264"
                    x1="131.123"
                    y1="34.448"
                    x2="-0.36495"
                    y2="34.448"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="1" stopColor="var(--primary-dark)" />
                    <stop offset="1" stopColor="var(--primary)" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="triangle2"
                width="250"
                height="71"
                viewBox="0 0 250 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 38.3735L250 0.373535L210 70.3735L0 38.3735Z"
                  fill="url(#paint0_linear_58_261)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_58_261"
                    x1="118.877"
                    y1="35.9255"
                    x2="250.365"
                    y2="35.9255"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="1" stopColor="var(--primary-dark)" />
                    <stop offset="1" stopColor="var(--primary)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <img
              className="man wow fadeInUp"
              data-wow-delay="0.8s"
              src={IMAGES.aboutman}
              alt="man"
            />
          </div>
        </section>
        <section
          className="content-inner about-wrapper2"
          style={{
            backgroundImage: "url(" + IMAGES.BgImage3 + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row about-bx2 align-items-center">
              <FitnessGoal isOpenModal={setOpen} />
            </div>
          </div>
        </section>
        <section
          className="content-inner overflow-hidden"
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center m-b20">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <div className="section-head side-line">
                  <h5 className="sub-title wow fadeInUp" data-wow-delay="0.2s">
                    Our Services
                  </h5>
                  <h2 className="title wow fadeInUp" data-wow-delay="0.4s">
                    Bring Your Fitness Ideas To Life
                  </h2>
                </div>
              </div>
              <div
                className="col-md-3 d-none d-md-block text-md-end wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <Link to={"/services"} className="btn btn-primary btn-skew">
                  <span>View All</span>
                </Link>
              </div>
            </div>
            <FitnessIdeas />
          </div>
        </section>
        {/* <section className="content-inner portfolio-wrapper">
          <div className="portfolio-wrapper-inner">
            <div className="container-fluid  p-0">
              <WorkoutSlider />
            </div>
          </div>
          <svg
            className="shape-up"
            width="635"
            height="107"
            viewBox="0 0 635 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M577 0L-16 107L635 45L577 0Z" fill="var(--primary-dark)" />
          </svg>
          <svg
            className="shape-down"
            width="673"
            height="109"
            viewBox="0 0 673 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M682 0L0 56L682 109V0Z" fill="var(--primary)" />
          </svg>
        </section> */}
        <section
          className="content-inner-1 testimonial-wrapper1"
          data-text="FEEDBACK"
          style={{
            backgroundImage: "url(" + IMAGES.BgImage2 + ")",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="section-head text-center">
              <h5 className="sub-title wow fadeInUp" data-wow-delay="0.2s">
                TESTIMONIAL
              </h5>
              <h2 className="title wow fadeInUp" data-wow-delay="0.4s">
                What Client Say’s
              </h2>
            </div>
            <ClientSlider />
          </div>
          <div className="avatar1">
            <img src={IMAGES.avatarlarge1} alt="" />
          </div>
          <div className="avatar2">
            <img src={IMAGES.avatarlarge2} alt="" />
          </div>
          <div className="avatar3">
            <img src={IMAGES.avatar3} alt="" />
          </div>
          <div className="avatar4">
            <img src={IMAGES.avatarlarge1} alt="" />
          </div>
          <div className="avatar5">
            <img src={IMAGES.avatarlarge2} alt="" />
          </div>
          <div className="avatar6">
            <img src={IMAGES.avatar3} alt="" />
          </div>
          <img
            className="svg-shape rotate-360"
            src={SVGICON.circlebigSvg1}
            alt=""
          />
          <img
            className="svg-shape-2 rotate-360"
            src={SVGICON.circlebigSvg2}
            alt=""
          />
        </section>
        {/* <section
          className="content-inner-1 overflow-hidden"
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <LatestSlider />
        </section> */}
        <div className="map z-index-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.101966920967!2d85.8223759758277!3d20.296046112539734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19095279c3c499%3A0xa7e49b041fe1b03f!2sBharat%20Fiitness%20Den!5e0!3m2!1sen!2sin!4v1723206059925!5m2!1sen!2sin"
            style={{
              border: "0",
              marginBottom: "-7px",
              width: "100%",
              height: "400px",
            }}
            loading="lazy"
            title="unique"
          ></iframe>
        </div>
        <section className="call-action style-1 footer-action">
          <div className="container">
            <NewsLetter />
          </div>
        </section>
      </div>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X_9VoqR5ojM"
        onClose={() => setOpen(false)}
      /> */}
    </>
  );
};

export default Home;
