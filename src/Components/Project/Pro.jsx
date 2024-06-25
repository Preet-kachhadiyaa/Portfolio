import React from "react";
import "./Project.css";

const Pro = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-12">
        <div className="card my-3">
          <img
            src={props.imgsrc}
            alt={props.imgsrc}
            height={190}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <hr className="w-25 mx-auto border-dark" />
            <p className="card-text">{props.text}</p>
            <a href={props.link} className="button p-btn">
              Sorce Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pro;
