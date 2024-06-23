import React from "react";
import "./Experieance.css";
import Exper from "./Exper";
import ExperData from "./ExperData";

const Experiance = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bgc py-5">
          <div className="col-11 mx-auto" id="Experiance">
            <div className="experiance">
              <div className="exper">
                <span>My Experiance</span>
                <span>I Have Experiance In Many Languages Like....</span>
                <div className="img mt-2">
                  <div className="row gy-5 mt-1">
                    {ExperData.map((val, ind) => {
                      return <Exper key={ind} imgsrc={val.imgsrc} />;
                    })}
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

export default Experiance;
