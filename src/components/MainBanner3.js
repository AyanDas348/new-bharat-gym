import React, { useEffect, useState } from "react";
import { IMAGES } from "../constants/theme";
import { Link } from "react-router-dom";
// import "./MainBanner3.css"; // Create this CSS file for the transition styles

const MainBanner3 = ({ open }) => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [fade, setFade] = useState(true);
  const totalSlides = 3; // Adjust this according to the number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSlideNumber((prev) => (prev === totalSlides ? 1 : prev + 1));
        setFade(true);
      }, 500); // Match the timeout with the transition duration
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <>
      <h2 className="data-text style-2 anm wow fadeInUp">
        <span style={{ zIndex: '1000' }}>F</span>
        <span style={{ zIndex: '1000' }}>I</span>
        <span style={{ zIndex: '1000' }}>T</span>
        <span style={{ zIndex: '1000' }}>N</span>
        <span style={{ zIndex: '1000' }}>E</span>
        <span style={{ zIndex: '1000' }}>S</span>
        <span style={{ zIndex: '1000' }}>S</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`banner-media anm wow fadeInUp ${fade ? 'fade-in' : 'fade-out'}`} style={{ minHeight: '100vh', opacity: fade ? 1 : 0, transition: fade ? 'opacity 0.5s ease-in' : 'opacity 0.5s ease-out' }}>
              <img
                src={IMAGES[`mainSliderPic${slideNumber}`]}
                className="main-img"
                alt=""
                style={{ objectFit: 'revert', minHeight: '100vh', maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="video-bx5">
        <Link onClick={() => open(true)} className="popup-youtube" to="#">
          <img src={IMAGES.miniSlidePic1} alt="" />
          <span className="video-btn  popup-youtube">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </div> */}
    </>
  );
};

export default MainBanner3;
