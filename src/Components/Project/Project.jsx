import React from "react";
import "./Project.css";
import Pro from "./Pro";
import ProData from "./ProData";

const Project = () => {
  return (
    <>
      <div className="container-fluid" >
        <div className="row pro">
          <div className="col-11 mx-auto" id="Project">
            <div className="project" >
              <div className="awasome">
                <span>Projects</span>
                <span>
                  I Completed So Many Projects With The Help <br /> Of
                  Html,Css,Bootstrap,Tailwind,React etc..!!
                </span>
              </div>
            </div>
            <div className="row text-center mt-4 pb-5">
              {ProData.map((val, ind) => {
                return (
                  <Pro
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
