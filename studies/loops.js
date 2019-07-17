// LOOPS: are a tool that allow us to iterave over data types.There are different types of fools.

/* 1. while: creates a loop that executes a specified statement as long or 'while' as a test condition evaluates to true.
* var vairableWhereiStartsAt = 0; // where loop starts
*
* syntax: while ( the condition you want to sest for){// condition that needs to be true to keep iterating
* Statment  // code that will execute as long as condition is true
* n++ // here is the incrementos or decrementor
* The while loop is used in arrays and strings
* }
* 
*   As a difference from other types of loops, the starting point of the loop is initialized outside of the loop.
*
*/

//Example:
var salary = 50000;
while( salary < 100000){
    console.log('Im not making  good money');
    salary++;
}


/* 2. for loop : creates a loop that consists of three optional expressions, enclosed in parentheses 
* and separated by semicolons, followed by a statement. This type of loop can be used 
* in Arrays and strings.
*
*   syntax: for ([initialization]; [condition]; [final-expression]){
*           statement
*           }
*       
*   Initialization: is where you wan to the loop to start iterating from
*   condition: determines for how long you want the reitertion to last.
*   final expression: is either an incrementer of decrementer that directs to what direction to move from initialization;
*/
//Example

for(var i = 10; i < 20; i++) {
   console.log(i); // prints numbers from 10 to 19
 }
 
for(var j = 19; j >= 10 ; j--) {
   console.log(j); // prints numbers from 19 to 10
 }

// Example in array looping forward
var someArray =[1,2,3,4,5];
for(var u = 0; j <= someArray.length ; u++) {
   console.log(u); // 1,2,3,4,5
 }
 
// Example Array looping backwards
var someArray1 =[1,2,3,4,5];
for(var k = someArray1[someArray1.length-1]; k >= 0 ; k--) {
   console.log(k); // 5,4,3,2,1
 }
 
 
/* 3. for-in loop: its used to access every property of an Object.
*
* syntax:
*    for (key in object) { // where key is a variable representing the keys and object the name of the object to iterate
*    Statement
*    }
*
*
*/

//Example:
var emptyStringToPutStuffInIt = '';
var objectWithStuffInit ={
  someInfoUno: "stuff uno",
  someInfoDos: "stuff dos"
};

for(var accessproperty in objectWithStuffInit){
  emptyStringToPutStuffInIt += objectWithStuffInit[accessproperty];
}
console.log(emptyStringToPutStuffInIt); //stuff unostuff dos

