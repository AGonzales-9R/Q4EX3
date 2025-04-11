function checkMagnitude(){
	var mag = document.getElementById('inputMag').value;

	if (mag>=8){
		
		window.alert("Will cause CATASTROPHIC damage");
	
	} else if (mag>=7 && mag<=7.9){

		window.alert("Will cause major damage");
	
	} else if (mag>=6.1 && mag<=6.9){

		window.alert("Will likely damage");

	} else if (mag>=5.5 && mag<=6.0){

		window.alert("Will slightly damage");
	
	} else if (mag>=2.5 && mag<=5.4){

		window.alert("Will rarely damage");

	} else if (mag<2.5){

		window.alert("Is rarely felt");
	}

}

window.aler("LOADING");