/* STRING MANINULATION
* There are many ways to manipulate a string, some with methods other with operators
*  bellow you will find different ways in which they can be applied.
*
*/
// 1. With Operators
// (\) n escape notation is used whenever we want to escape certain symbol withing a string like 
// quotes within a string.
//Example
console.log('Camilo\'s house');// prints 'camilo's house' in this case it scapes the ' before the s

//(+) concatenating allows us to add two different strings
//Example 
var willsisterfirstName = "ellie";
var willsisterLastName = 'george';

console.log(willsisterfirstName +" "+ willsisterLastName); // prints "ellie george"

//2. With Methods

// .length  it returns the length of the string
//Example
var nombres = 'xuxa';
console.log(nombres.length);// it prints 4 
console.log(nombres[nombres.length - 1]); // it prints the last character of the string

//.toUpperCase() it converts the string or character seleceted into capital letters.
//Example
console.log(nombres.toUpperCase());// it prints XUXA

//.toLowerCase() it converts the string or character selected into Lower case letters.
//Example
console.log(nombres[0].toLowerCase());// it prints 'x'

// string[] // it retrieves a specific character
//Example
console.log(nombres[1]);//'u'

//.slice() // it slices a part of the string determined by what you put inside the ()
// Example
var will = 'will';
console.log(will.slice(1,3));// it prints 'il;. 1(inclusive) is where in the index to start slicing and 3(exclusive) where to end slice where

// .split() // it converts a string into an array.
//Example
console.log(will.split(''));// it prints this array [w,i,l,l]

//.indexOf()// finds the index of a substring
//Example 
var cool= 'will is the man';
console.log(cool.indexOf('man'));// it returns 12 because man starts at index 12

//.replace()// replaces a substring for another substring.
//Example
var losHermanos = 'camilo todo lo puede';
console.log(losHermanos.replace('camilo', 'will'));// is returns 'will todo lo puede';