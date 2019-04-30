// Kaitlin Wan
// SoftDev2 pd6
// K21 -- Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
// 2019-04-29
console.log(json)

var year = json.filter( function(n){
  return n['schoolyear'] == 20092010} );
// console.log(thisYearOnly);

var bigschool = year.filter( function(n){
  return n['total_enrollment'] > 3000} );

console.log("We are ONLY working with the school year 2009 to 2010")
console.log("We will also look for schools that are larger than 3000!");

var names = bigschool.map( function(n){return [n['Name'], n['total_enrollment']]} );
console.log("Names of Schools that are greater than 3000")
console.log(names);

console.log('Total number of students in NYCDOE system for 2009 to 2010');

var enrollall = year.map( function(n){return n['total_enrollment']} );
// console.log(listOfEnrollments);

var total = enrollall.reduce( function(a,b) {return a+b} );
console.log(total);

console.log('schools where asian_per > 50');

var asian = year.filter( function(n) {return n['asian_per'] > 50} );
//console.log(asian);
var anames = asian.map( function(n) {return [n['Name'], n['asian_per']]} );
console.log(anames);
