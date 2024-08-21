import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SVGICON } from '../constants/theme';


const Footer = () => {
    let update = new Date();
    return (
        <>
            <footer className="site-footer style-1 bg-img-fix footer-action" style={{ backgroundImage: "url(" + IMAGES.footerbg + ")" }} id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-12">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-dark">
                                        <Link to={"/"}><img className='select_logo_dark' src={IMAGES.logo} alt="" /></Link>
                                    </div>
                                    <p>The ultimate fiitness den is roaring to have you here.</p>
                                    <h6 className="m-b15">Our Socials</h6>
                                    <div className="dz-social-icon style-1">
                                        <ul>
                                            <li>
                                                <Link target="_blank" to="https://www.facebook.com/share/vH3GofuJACZfMY3G/?mibextid=qi2Omg" rel="noreferrer">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>{" "}
                                            {/* 
                                            <li>
                                                <Link target="_blank" to="https://twitter.com/?lang=en" rel="noreferrer">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>{" "} */}
                                            <li>
                                                <Link target="_blank" to="https://www.instagram.com/bharatfiitnessden/?hl=en" rel="noreferrer">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>{" "}
                                            {/* <li>
                                                <Link target="_blank" to="https://www.whatsapp.com/" rel="noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="widget widget_locations">
                                    <h4 className="footer-title">Locations</h4>
                                    <div className="clearfix">
                                        <h6>Bhubaneswar</h6>
                                        <p>2nd and 4th Floor, Om Towers, Plot no 2297/2540, near District High Lounge, Doordarshan Colony, Jayadev Vihar, Bhubaneswar, Odisha 751013</p>
                                        {/* {SVGICON.map} */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="widget widget_working">
                                    <h4 className="footer-title">Working Hours</h4>
                                    <ul>
                                        <li>
                                            <span className="days">Monday – Saturday</span>
                                            {/* <span className="time"><Link to={"/schedule"}>07:00 – 21:00</Link></span> */}
                                        </li>
                                        {/* <li>
                                            <span className="days">Saturday</span> */}
                                            {/* <span className="time"><Link to={"/schedule"}>07:00 – 16:00</Link></span> */}
                                        {/* </li> */}
                                        <li>
                                            <span className="days">Sunday Closed</span>
                                        </li>
                                    </ul>
                                    {/* <Link to={"/schedule"} className="btn-link" >More Here <i className="fa-solid fa-arrow-right m-l10"></i></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer Bottom Part --> */}
                <div className="container">
                    <div className="footer-bottom">
                        <div className="text-center">
                            <span className="copyright-text">Copyright © {update.getFullYear()} <Link to="/" rel="noreferrer" target="_blank" >IAMPIX</Link>. All rights reserved.</span>
                        </div>
                    </div>
                </div>
                <img className="girl-img" src={IMAGES.footergril1} alt="" />
                <img className="svg-shape-1 rotate-360" src={IMAGES.footercircle} alt="" />
                <img className="svg-shape-2 rotate-360" src={IMAGES.footercircle} alt="" />
            </footer>
        </>
    );
};

export default Footer;