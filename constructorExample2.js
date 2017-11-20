
// create a constructor

function Hair(grade,color,length,density){

	this.grade = grade;
	this.color = color;
	this.length = length;
	this.waterContact = function(){
		if (this.grade > 3){
		return "I curl up when I am dampened!"
	}
		else{
			return "I just lay limply when dampened.";
		}
    }
    this.contentment = function(){
    	console.log("I am generally happy with my hair.");
    }
    this.frizz = function(){
    	console.log("My hair is generally frizzy.");
    }
	this.density = density;
}

Hair.prototype.colorTreated = false;
Hair.prototype.shaped = function(){

	console.log("How often do you get your hair shaped?");
}

var Pocahontas = new Hair(4,"black","tailbone length","coarse and thick");
var Nnenna = new Hair(4,"black","armpit length","coarse and thick");
var instaModel = new Hair(3,"honey blonde","feet length","thin");