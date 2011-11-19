//Aaron Goshine
var mainArray = [ 26, 103, 102, 1, 2, 559, 538, 676, 29, 537, 516, 540, 13, 650];
var randarr = [ 20, 100, 50,10];
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
	displayInMyConsole(ARQ([ 20, 100, 50,10]).tiq('/').currencyFmt(5000).commaFmt(5000).resolver)

	//--	
}



function displayInMyConsole(valuesToWrite){
	
	var cons = document.getElementById("console");
	cons.innerHTML = valuesToWrite;

}
