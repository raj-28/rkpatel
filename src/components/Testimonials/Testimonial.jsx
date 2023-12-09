import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/infosys.png";
import profilePic2 from "../../img/gurjari.png";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Employee of the Quater   For Being exemplary in session delivery with Excellent feedback , Contribution towards Mern Project Creation",
    },
    {
      img: profilePic2,
      review:
        "Raj Patel is a joy to work with, he is an excellent recourse and a master at Python/Django programming... He handled our Web development with aplomb and diligence, displaying the ability to follow creative direction while adding his own creative input in a diplomatic and useful way. His work led to an increase in click-troughs. I recommend him to anyone who needs web Development and Website work.",
    },
  //   {
  //     img: profilePic3,
  //     review:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  //   },
  //   {
  //     img: profilePic4,
  //     review:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  //   },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>What Others  </span>
        <span> Says </span>
        <span>About me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination,Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }} // Add autoplay prop with 10 seconds delay
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
