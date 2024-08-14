import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import NewsLetter from "../elements/NewsLetter";
import PageTitle from "../elements/PageTitle";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    dzFirstName: "",
    dzLastName: "",
    dzEmail: "",
    dzPhoneNumber: "",
    dzMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    // You can uncomment the following line when you're ready to use EmailJS
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    const payload = {
      name: formData.dzFirstName + ' ' + formData.dzLastName,
      email: formData.dzEmail,
      phone: formData.dzPhoneNumber,
      message: formData.dzMessage,
    }
    const request = await axios.post('https://earth-again-server.onrender.com/send-email', payload);
    e.target.reset();
    swal("Good job!", "Form submitted successfully", "success");
  };

  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Contact Us" parentTitle="Home" />
        <section className="content-inner-2 z-index-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-xl-5 m-sm-b30 m-xl-b0">
                <div className="contact-box">
                  <h3 className="contact-title">Contact Information</h3>
                  <p className="contact-text">
                    Fill up the form and our Team will get back to you within 24
                    hours.
                  </p>
                  <div className="widget widget_getintuch">
                    <ul>
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>
                          2nd and 4th Floor, Om Towers, Plot no 2297/2540, near District High Lounge, Doordarshan Colony, Jayadev Vihar, Bhubaneswar, Odisha 751013
                        </p>
                      </li>
                      <li>
                        <i className="fa-solid fa-phone"></i>
                        <p>8339901557</p>
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope"></i>
                        <p>sales@bharatsfitnessden.com</p>
                      </li>
                    </ul>
                  </div>
                  <h6 className="m-b15 text-white">Our Socials</h6>
                  <div className="dz-social-icon style-1 dark">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.facebook.com/share/vH3GofuJACZfMY3G/?mibextid=qi2Omg"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.instagram.com/bharatfiitnessden/?hl=en"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>{" "}
                    </ul>
                  </div>
                  <svg
                    width="250"
                    height="70"
                    viewBox="0 0 250 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 38L250 0L210 70L0 38Z"
                      fill="url(#paint0_linear_306_1296)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_306_1296"
                        x1="118.877"
                        y1="35.552"
                        x2="250.365"
                        y2="35.552"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="var(--primary)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="col-md-6 col-xl-7">
                <form
                  className="dz-form dzForm style-1"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <div className="dzFormMsg"></div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-group input-line">
                        <input
                          name="dzFirstName"
                          required
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          value={formData.dzFirstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group input-line">
                        <input
                          name="dzLastName"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          value={formData.dzLastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-group input-line">
                        <input
                          name="dzEmail"
                          required
                          type="email"
                          className="form-control"
                          placeholder="Your Email Address"
                          value={formData.dzEmail}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-group input-line">
                        <input
                          name="dzPhoneNumber"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          value={formData.dzPhoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group input-line m-b30">
                        <textarea
                          name="dzMessage"
                          rows="5"
                          required
                          className="form-control"
                          placeholder="Message..."
                          value={formData.dzMessage}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-primary btn-lg btn-skew"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="container content-inner-1">
          <div className="map-iframe">
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.101966920967!2d85.8223759758277!3d20.296046112539734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19095279c3c499%3A0xa7e49b041fe1b03f!2sBharat%20Fiitness%20Den!5e0!3m2!1sen!2sin!4v1723206059925!5m2!1sen!2sin"
              style={{ border: "0", marginBottom: "-7px", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
