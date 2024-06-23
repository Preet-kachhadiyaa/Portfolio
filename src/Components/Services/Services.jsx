import React from "react";
import "./Services.css";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <>
      <div className="container-fluid" >
        <div className="row pt-5">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12" >
                <div className="services" id="Services">
                  <div className="awasome1" >
                    <span>My Awasome</span>
                    <span>Services</span>
                    <span>
                      I Provide Many Servies To User,For User Convinent <br />
                      Some Services Are There....
                    </span>
                    <button className="button s-btn">Download C.V</button>
                    <div
                      className="blur s-blur"
                      style={{ background: "#ABF1FF94" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mt-5">
                <div className="cards mt-5">
                  <div>
                    <Card
                      emoji={Glasses}
                      heading={"Devloper"}
                      details={
                        " Html, Css , JavaScript , Bootstrap , Tailwind , React "
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
