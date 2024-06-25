import React from "react";
import "./Home.css";
import { saveAs } from "file-saver";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";
import Boy from "../../img/boy.png";

const Home = () => {
  const DownloadPdf = async () => {
    const response = await fetch("/public/Preet Resume.pdf");
    const blob = await response.blob();
    saveAs(blob, "Preet-Kachhadiya.pdf");
  };
  return (
    <>
      <section id="header">
        <div className="container-fluid" id="Navbar">
          <div className="row pt-5">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="h-name">
                    <span>Hyy! I Am</span>
                    <span>Preet.k</span>
                    <span>
                      Front-End Web Devloper With Some Experiance In <br />
                      Web-Desiging And Devlopment,Producing The Qulity Work.
                    </span>
                  </div>
                  <button className="button h-btn" onClick={DownloadPdf}>
                    Hire Me.!
                  </button>
                  <div className="h-icons">
                    <a href="https://github.com/Preet-kachhadiyaa">
                      <img src={Github} alt="" />
                    </a>
                    <a href="https://www.facebook.com/preet.prit.12">
                      <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://www.instagram.com/_mr.preet.090/">
                      <img src={Insta} alt="" />
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="h-img animated">
                    <img src={Boy} alt="Img Pic" />
                  </div>
                  <div
                    className="blur"
                    style={{ background: "rgb(238 210 255)" }}
                  ></div>
                  <div
                    className="blur"
                    style={{
                      background: "#C1F5FF",
                      top: "7rem",
                      width: "21rem",
                      height: "11rem",
                      left: "18rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
