//Aaron Goshine
window.onload = function(){
	var btn = document.getElementById("Calculate");
	/**
	*
	*useage 
	*/
	//diplayInMyConsole(ARQ().commaFmt(-100000000000.12343));
	diplayInMyConsole(ARQ().midValue(mainArray));
	
	//--	
}



function diplayInMyConsole(valuesToWrite){
	
	var cons = document.getElementById("console");
	cons.innerHTML = valuesToWrite;

}
