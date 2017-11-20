// for(var count=1;count<=100;count+=4){
//   console.log(count)
// }

// for(var count=1;count<=50;count++){
//   if (count % 2 === 0){
//     console.log("Even number.")
//   }
//   else{
//     console.log(count)
//   }
// }
// var newArr = [1,2,3,4,5]

// newArr.forEach(function(el,i){
//   console.log(el+": "+i)
// });


// sum for for loop 0 to 10
// sum for while loop 11 to 22
// sum for for each 23-30 in array


var sum = 0;
for(var i=0;i<=10;i++){
  sum = sum + i;
}
console.log(sum)

var total = 0;
var i=11;
while(i<=22){
  total = total + i;
  i++;
}
console.log(total)


arr = [23,24,25,26,27,28,29,30];
result = 0;
arr.forEach(function(el){
  result = result + el;
});
console.log(result)

