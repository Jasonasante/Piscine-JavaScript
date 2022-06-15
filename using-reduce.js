const adder=array=>array.reduce(myFunc)
function myFunc(total, num) {
  return total + num;
}
console.log(adder([1,2,3]))
