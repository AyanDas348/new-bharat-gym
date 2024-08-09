import React from "react";
import { IMAGES } from "../constants/theme";
import { Link } from "react-router-dom";

const MainBanner3 = ({ open }) => {
  return (
    <>
      <h2 className="data-text style-2 anm wow fadeInUp">
        <span style={{ zIndex: '1000'}}>F</span>
        <span style={{ zIndex: '1000'}}>I</span>
        <span style={{ zIndex: '1000'}}>T</span>
        <span style={{ zIndex: '1000'}}>N</span>
        <span style={{ zIndex: '1000'}}>E</span>
        <span style={{ zIndex: '1000'}}>S</span>
        <span style={{ zIndex: '1000'}}>S</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-media anm wow fadeInUp">
              <img src={IMAGES.mainSliderPic1} className="main-img" alt="" />
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
