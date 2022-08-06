import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./secondscounter.js";

//create your first component

var seconds = 0;

setInterval( ()=>{seconds++}, 1000);






const Home = () => {
	return (
		<div className="text-center">
				
				<SecondsCounter segundos={seconds}></SecondsCounter>
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


