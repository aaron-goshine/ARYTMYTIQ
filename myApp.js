//Aaron Goshine
window.onload = function(){
	
	/**
	*
	*useage 
	*/
	//displayInMyConsole(ARQ().commaFmt(-100000000000.12343));
	/*displayInMyConsole(ARQ([10,1,3]).foreach(null,function(x){
		
		alert(ARQ([100,13,3]).tiq('*'));
		}));	
	*/
	displayInMyConsole(ARQ([100,3,4]).tiq('+'))

	//--	
}



function displayInMyConsole(valuesToWrite){
	
	var cons = document.getElementById("console");
	cons.innerHTML = valuesToWrite;

}
