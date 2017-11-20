// constructor: 3 properties, 2 methods
// create two objects and then extend the prototype

function Shirt(color,size,brand,slogan,inStock){
  this.color = color
  this.size = size
  this.brand = brand
  this.slogan = slogan
  this.inStock = inStock

}

var shirtOne = new Shirt("blue","XL","Ralph Lauren Polo","Be the man on the horse.",true)

var shirtTwo = new Shirt("black","M","Gucci","What are your stripes?",false)

Shirt.prototype.gender = "Male"

console.log(shirtOne, shirtTwo)
