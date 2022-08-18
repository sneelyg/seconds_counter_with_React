import React from "react";
import Reset_seconds from "./home.jsx";

const Botones = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="row justify-content-center mt-5">
        <div className="col-2 mx-2" id="stop_btn">
          Stop
        </div>
        <div className="col-2 mx-2" id="start_btn">
          Start
        </div>
        <div className="col-2 mx-2" id="stop_btn" onClick={()=>Reset_seconds()}>
          Reset
        </div>
        
      </div>
    </div>
  );
};

export default Botones;
