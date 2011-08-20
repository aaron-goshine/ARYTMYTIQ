//Aaron Goshine
window.onload = function(){
	
	/**
	*
	*useage 
	*/
	//diplayInMyConsole(ARQ().commaFmt(-100000000000.12343));
	/*diplayInMyConsole(ARQ([10,1,3]).foreach(null,function(x){
		alert(x);
		}));	*/
	diplayInMyConsole(ARQ([100,13,10,34]).tiq('*'))

	//--	
}



function diplayInMyConsole(valuesToWrite){
	
	var cons = document.getElementById("console");
	cons.innerHTML = valuesToWrite;

}
