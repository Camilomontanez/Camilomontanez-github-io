/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


//4. var, let and const
/*Let: declares a variable that has a block scope. It can be reassigned
* var : declares a variable that has global scope and it can be reassigned
*const:is a varible with a block scope and its value can NOT be reassigned
* but is mutable
*/
// let example
 let car = 'ferrary';

// var example
var carro = 'porshe';

// const example
const avion = 'reno 4';

// Hoisting
/* is the behaviour and ability of variables and functions to be 
* taken to the top of their scope. This means there are certain rules
* to the access of variables depending on how they are declared and whether 
* they are inside a block of code.
* variables hoiste only their name.
* functions hoiste their name and body


/*
 * 
 *
 */