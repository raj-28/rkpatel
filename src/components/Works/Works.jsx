import React, { useContext } from "react";
import "./Works.css";
import teenager from "../../img/teenager.png"
import gurjari from "../../img/gurjari.png"
import infosys from "../../img/infosys.png"
import uncledukan from "../../img/uncledukan.png"
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          Fueling success, I've teamed up with top-notch brands and clients. Crafting brilliance and pushing boundaries, 
            <br />
            my work stands as a testament to innovation. Join the ranks of those who've experienced the extraordinary.             <br />
            <br />
            Let's redefine excellence together.          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={teenager} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={gurjari} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={infosys} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={uncledukan} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
