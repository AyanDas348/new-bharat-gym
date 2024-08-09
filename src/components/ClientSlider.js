import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import { IMAGES } from "../constants/theme";

const dataBlog = [
  { image: IMAGES.avatarlarge1, desc: "I've been a member of this gym for over a year, and the experience has been transformative. The trainers are incredibly knowledgeable, and the facilities are top-notch. I’ve seen a huge improvement in my strength and endurance, and I love the supportive community here. Highly recommend!", name: 'Punyaslok Panda' },
  { image: IMAGES.avatarlarge2, desc: "Joining this gym was the best decision I’ve ever made for my health. The equipment is always clean and in great condition, and the staff is friendly and supportive. I appreciate the variety of classes offered, from yoga to high-intensity interval training. It’s made working out something I actually look forward to!", name: 'Ayan Das'},
  { image: IMAGES.avatarlarge3, desc: "As someone who was new to working out, I was nervous about joining a gym. But the staff here made me feel welcome from day one. The personal training sessions have been incredibly helpful in teaching me the basics and keeping me motivated. I’m seeing great results and couldn’t be happier!", name: 'Arnav Acharya' },
];

function ClientSlider() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <>
      <Swiper
        className="testimonial-swiper"
        // centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        speed={1500}
        pagination={{
          el: ".swiper-pagination",

          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '"> 0' + (index + 1) + "</span>"
            );
          },
        }}
        //autoplay= {{
        //    delay: 4500,
        //}}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation, Pagination]}
      >
        {dataBlog.map((item, ind) => (
          <SwiperSlide key={ind}>
            <div className="testimonial-1">
              <div className="testimonial-pic">
                <img src={item.image} alt="" />
              </div>
              <ul className="testimonial-rating">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="testimonial-info">
                <p className="testimonial-text">
                  {item.desc}
                </p>
                <h4 className="testimonial-name">{item.name}</h4>
                <span className="testimonial-position text-primary">
                  Member
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="num-pagination">
          <div
            className="testimonial-button-prev btn-prev"
            ref={navigationPrevRef}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="swiper-pagination style-1" ref={paginationRef}></div>
          <div
            className="testimonial-button-next btn-next"
            ref={navigationNextRef}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </Swiper>
    </>
  );
}
export default ClientSlider;
