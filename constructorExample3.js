
function NumbersGame(num1, num2){

	this.num1 = num1
	this.num2 = num2
	this.numbers = function(){

		return this.PowerMe();
	}
	this.PowerMe = function(num1,num2){
		console.log(this.num1 + " to the power of " + this.num2 + " is: " +(this.num1**this.num2))
	}
}

// function PowerMe(x,y){
// 	return "power me: "+(x**y)
// }

var firstGame = new NumbersGame(3,4)
var secondGame = new NumbersGame(10,3)
var thirdGame = new NumbersGame(4,5)

firstGame.numbers()
secondGame.numbers()
thirdGame.numbers()
