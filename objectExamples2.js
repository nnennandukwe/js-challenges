// object 3 props, 2 methods
// one prop contains array of information
// console log piece of info from array
// literal notation
// ul update in the DOM iterating through array

var futureLife = {
  
  city: "Stockholm",
  country: "Sweden",
  d: function(city,country){
    return "I live in "+city+", "+country+".";
  },
  apartmentLocation: "Gamla Stan",
  occupation: function(){
    return "I work 100% remotely as a Software Engineer.";
  },
  currencies: ["Kronor","USD","Euros"],
  faveStore: function(){
    return "I enjoy shopping in Hotorget."
  }
}

futureLife.currencies.forEach(function(m){
  $("ul").append("<li>"+m+"</li>")
})