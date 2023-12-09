// import React, { useContext } from "react";
// import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
// import { themeContext } from "../../Context";
// const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className="portfolio" id="portfolio">
//       {/* heading */}
//       <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
//       <span>Portfolio</span>

//       {/* slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={3}
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         <SwiperSlide>
//           <img src={Sidebar} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Ecommerce} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={MusicApp} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;






import React, { useState, useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import reacthackerank from "../../img/certificate/reacthackerank.jpg";
import awstraining from "../../img/certificate/awstraining.png";
import icfewd from "../../img/certificate/icfewd.png";
import infosysaws from "../../img/certificate/infosysaws.png";
import jstraining from "../../img/certificate/jstraining.png";
import researchfarmermarket from "../../img/certificate/researchfarmermarket.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [portfolioType, setPortfolioType] = useState("certificates");

  const handlePortfolioTypeChange = (type) => {
    setPortfolioType(type);
  };

  const getPortfolioItems = () => {
    switch (portfolioType) {
      case "certificates":
        return [
          <SwiperSlide key={1}>
            <img src={icfewd} alt="" />
          </SwiperSlide>,
          // Add other certificate items as needed
          <SwiperSlide key={1}>
            <img src={reacthackerank} alt="" />
          </SwiperSlide>,
          <SwiperSlide key={1}>
          <img src={infosysaws} alt="" />
        </SwiperSlide>,
        ];
      case "badges":
        return [
          <SwiperSlide key={1}>
            <img src={jstraining} alt="" />
          </SwiperSlide>,
          // Add other badge items as needed
          <SwiperSlide key={1}>
            <img src={awstraining} alt="" />
          </SwiperSlide>,
        ];
      case "projects":
        return [
          <SwiperSlide key={1}>
            <img src={researchfarmermarket} alt="" />
          </SwiperSlide>,
          // Add other project items as needed
        ];
      default:
        return null;
    }
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* Buttons to switch portfolio type */}
      <div className="portfolio-buttons">
        <button onClick={() => handlePortfolioTypeChange("certificates")}>
          Certificates
        </button>
        <button onClick={() => handlePortfolioTypeChange("badges")}>
          Badges
        </button>
        <button onClick={() => handlePortfolioTypeChange("projects")}>
          Projects
        </button>
      </div>

      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        {getPortfolioItems()}
      </Swiper>
    </div>
  );
};

export default Portfolio;







