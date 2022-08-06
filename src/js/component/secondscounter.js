import React from "react";

const SecondsCounter = (props) => {
 var unidad = props.segundos%10;
 var decena =  Math.floor(props.segundos/10)%10;
 var centena =  Math.floor(props.segundos/100)%10;
 var mil =  Math.floor(props.segundos/1000)%10;
 var diezmil =  Math.floor(props.segundos/10000)%10;
 
 
    return (
    <div className="row">
      <p> Han Pasado {props.segundos} segundos</p>
     <div className="col-2"> 
     <i class="fa-solid fa-clock"></i>
     </div>
     <div className="col-2">{diezmil}</div>
     <div className="col-2">{mil}</div>
     <div className="col-2">{centena}</div>
     <div className="col-2">{decena}</div>
     <div className="col-2">{unidad}</div>
     

  

    </div>
  );
};

export default SecondsCounter;
