$(document).ready(function(){

var slot1, slot2, slot3;
var min = 1;
var max = 6;
var arr = ["apples","oranges","cherries","kiwi","pineapples"];

$("#bet1").on("click",function(){
	for(var i = 0; i < 3; i++){
	slot1 = arr[Math.floor(Math.random()*arr.length)];
	slot2 = arr[Math.floor(Math.random()*arr.length)];
	slot3 = arr[Math.floor(Math.random()*arr.length)];
	console.log(slot1);
}
	if((slot1 == slot2) && (slot2 == slot3)){
		console.log("YOU WIN!");
	}
	else{
		console.log("YOU LOSE!");
	}


});
});



