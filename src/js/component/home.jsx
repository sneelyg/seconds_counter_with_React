import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./secondscounter.js";
import Botones from "./botones.js";

//create your first component

var seconds = 0;
var Contador1 = setInterval(()=>seconds++, 1000);




const Home = () => {
  return (
    <div className="text-center">
      <h2 id="titulo">EVERY SECOND COUNTS</h2>
      
      <SecondsCounter segundos={seconds}></SecondsCounter>

      <div className="col-2 mx-2" id="stop_btn" onClick={() => Reset_seconds()}>
        Reset
      </div>
      <div
        className="col-2 mx-2"
        id="stop_btn"
        onClick={() => clearInterval(Contador1)       }
      >
        Stop
      </div>
      <div
        className="col-2 mx-2"
        id="stop_btn"
        onClick={() => Contador1 = setInterval(()=>seconds++, 1000)}
      >
        Start
      </div>

     

      <p className="footing">Made by @sNeelyg with a whole lotta patience!</p>
    </div>
  );
};

export default Home;

export const Reset_seconds = () => {
  seconds = 0;
};
