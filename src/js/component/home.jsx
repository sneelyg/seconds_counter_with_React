import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./secondscounter.js";
import Botones from "./botones.js";

//create your first component

var seconds = 0;

setInterval( ()=>{seconds++}, 1000);






const Home = () => {
	return (
		<div className="text-center">
				<h2 id="titulo">EVERY SECOND COUNTS</h2>
				<SecondsCounter segundos={seconds}></SecondsCounter>
				<Botones/>
				<i class="fa-solid fa-watch"></i>
				<p className="footing">		
			
				Made by{" "}
				sNeelyg
				with a whole lotta love!
			</p>
		</div>
	);
};

export default Home;


