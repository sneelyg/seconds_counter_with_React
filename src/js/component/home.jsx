import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./secondscounter.js";

//create your first component

var seconds = 3424;

setInterval( ()=>{seconds++}, 1000);






const Home = () => {
	return (
		<div className="text-center">
				
				<SecondsCounter segundos={seconds}></SecondsCounter>
				<i class="fa-solid fa-watch"></i>
				<p>		
			
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;


