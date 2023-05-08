import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Medium from "@iconscout/react-unicons/icons/uil-medium-m"
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>masterrajpatel@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/master__raj/">
          <Insta color="white" size={"3rem"} /></a>
          <Facebook color="white" size={"3rem"} />
          <a href="https://github.com/raj-28">
            <Gitub color="white" size={"3rem"} /></a>
            <a href="https://medium.com/@masterrajpatel">
            <Medium color="White" size={"3rem"}/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
