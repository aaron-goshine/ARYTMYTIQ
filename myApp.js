//Aaron Goshine
window.onload = function(){
	
	/**
	*
	*useage 
	*/
	//displayInMyConsole(ARQ().commaFmt(-100000000000.12343));
	/*displayInMyConsole(ARQ([10,1,3]).foreach(null,function(x){
		alert(x);
		}));	*/
	displayInMyConsole(ARQ([100,13,10,34]).tiq('*'))

	//--	
}



function displayInMyConsole(valuesToWrite){
	
	var cons = document.getElementById("console");
	cons.innerHTML = valuesToWrite;

}
