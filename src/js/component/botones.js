import React from "react";

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
        <div className="col-2 mx-2" id="stop_btn" onClick={()=>seconds=0}>
          Reset
        </div>
        <div className="col-2 mx-2" id="stop_btn">
          <button onClick={()=>seconds=0}>ClickMe</button>
        </div>
      </div>
    </div>
  );
};

export default Botones;
