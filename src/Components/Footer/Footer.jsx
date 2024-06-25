import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
          <span>Preetk02700270@gmail.com</span>
          <div className="f-icons">
            <a href="https://github.com/Preet-kachhadiyaa"><Github color="white" size="3rem" /></a>
            <a href="https://www.facebook.com/preet.prit.12"><Facebook color="white" size="3rem" /></a>
            <a href="https://www.instagram.com/_mr.preet.090/"><Insta color="white" size="3rem" /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
