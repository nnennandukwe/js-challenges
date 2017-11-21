$(document).ready(function(){

var slot1, slot2, slot3;
var storedMoney;
var arr = ["apples","oranges","cherries","kiwi","pineapples"];

$("#bet1").on("click",function(){

	var betAmount = $("#betAmount").val();
	
	if(betAmount != "" && betAmount > 0){
	console.log(betAmount)
	storedMoney = parseFloat(betAmount);

	$("p").text("YOUR BANK: "+storedMoney);
	$("#betAmount").val("")
	slot1 = arr[Math.floor(Math.random()*arr.length)];
	slot2 = arr[Math.floor(Math.random()*arr.length)];
	slot3 = arr[Math.floor(Math.random()*arr.length)];
	
	console.log(slot1,slot2,slot3);
	if((slot1 == slot2) && (slot2 == slot3)){
		console.log("YOU WIN!");
	}
	else if((slot1 == slot2) || (slot2 == slot3) || (slot1 == slot3)){
		console.log("YOU...KINDA WON? HERE'S 2x YOUR BET.")
		betAmount = betAmount*2;
		storedMoney+=betAmount;
		console.log("Stored Money: "+storedMoney)
	}
	else{
		console.log("YOU LOSE! SORRY, BUDDY.");
		storedMoney-=betAmount;
		console.log("Stored Money: "+storedMoney)
	}
	}
	else{
		$("p").text("Please enter in your bet amount!").css("color","red").css("font-weight","bold")
		$("#betAmount").val("")
	}

});
});



