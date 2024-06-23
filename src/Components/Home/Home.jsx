import React from "react";
import "./Home.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";
import Boy from "../../img/boy.png";

const Home = () => {
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
                  <button className="button h-btn">Hire Me.!</button>
                  <div className="h-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Insta} alt="" />
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
