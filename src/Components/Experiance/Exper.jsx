import React from "react";
import "./Experieance.css";

const Exper = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-6">
        <img
          src={props.imgsrc}
          alt={props.imgsrc}
          className="e-img"
          height={225}
          width={25}
        />
      </div>
    </>
  );
};

export default Exper;
