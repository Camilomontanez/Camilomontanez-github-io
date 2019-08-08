/*OPERATORS
*
*ASSIGMENT OPERATORS:
*Assigns a value to its left operand based on the value of its right operand.
*The basic assiment operator is ( = ). Example x = y
*the other assignment operators are shorhand for standard operations. see examples 
*bellow.
*
*
*/
//Examples:

var basicAssignment = 'using the symbol = to assign a value, in this case this string to the variable basicAssignment ';
var x = 'some value';
var numero10 = 10;
var numero20 = 20;
var ejemplo1 = numero10 += numero20; // this is equal to 30
var ejemplo2 = numero20 -= numero10; // this is equal to 10
var ejemplo3 = numero20 *= numero10 // this is 200
var ejemplo4 = numero20 /= numero10 //  this is 2
var ejemplo5 = numero20 %= numero10 // this is 0

console.log(ejemplo1);

27
/* 1. ARITHMETIC OPERATORS: Take numerical values, either litarls or variables, 
*as their operators and return a single numerical value.
*The standar arithemetic operators are  (+),(-),(*) and (/).
*/

//Example:

// Example

var dos = 2;
var tres = 3;
var addition = dos + tres;
var substraction = dos - tres;
var multiplication = dos * tres;
var division = dos / tres;
console.log(division);
console.log(multiplication);
console.log(substraction);
console.log(addition);

/* 2. COMPARISON OPERATORS:  JS has both strict and type-converting comparisons.
*A stric comparison is represented by (===) and is only true if operards have the 
*same value/content and are the same data type.
*A type converting comparison is represented by (==) and it converts
*the operands to the same type before making the comparison. 
*it is only checking for what’s called truthy or falsely values(it only check for value comparison but not for type)
*comparison operators will return a boolean, either true or false.
*/

// Examples equality operator(==)
if (10 == 10){
    console.log('they are the same value')
}

if (10 == '10'){
    console.log('they are the same value')// here the operators converst the types and then compares values.
}


//Inequality operator : inequality operator returns true if the operands are not equal.
//Example:

if (10 !== '10'){
    console.log('they are not the same value')// 
}

if (3 != 10){
    console.log('they are not the same value')// 
}

//Strict Equality (===): The identity operator returns true if the operands are strictly equal. 
//There is no convertion and this operator will verify for data type and content.
//Example:

if (10 === 10){// samet type same value  
    console.log('they are the same value and type')
}

if (10 === '10'){// this is false
    console.log('they are the same value and type')// in this case the type of values is different and if stament will not execute
}

/* 3. RELATIONAL OPERATORS: This operator compares 2 or more elements to decide which one
*is grater or lesser. Relational operators will return a Boolean ( either true or false)
*Bellow you will find the relational operators
* (<)
*(<=)
*(>)
*(>=)
*
*/

//Examples 
function toCompare(cosa1, cosa2){
    if (cosa1 > cosa2){
        return 'cosa1 is greater than cosa2';
    }
}

toCompare(10,12);

/*4. LOGICAL OPERATORS:Logical operators are typically used with boolean (logical) values,
*and when they are, they return a boolean value.
*
*This are the logical operators:
*  ||  which means "or"
*  && which means "and"
*  ! which mean "not"  
*
*/
//Example:
var K = 10;
var Q = 20;
console.log(K > 0 && Q > 0); // expected output: false
console.log(K > 0 || Q > 0);// expected output: true
console.log(!(K > 0 || Q > 0));// expected output: false

/* 5. URINARY OPERATORS: 
* is one that takes a single operand/argument and performs an operation.
* This operand comes either before or after the operator.
*
*/
//(!) Logical NOT operator or bang operator. It negates whatever is after it.
//Example:
console.log(!true);// prints false

//(-) The unary negation operator converts its operand to Number type and negates it
//Example:

var tuti = '12';
console.log(- tuti)// it prints -12

// (Typeof) : typeof will identify the type of data of an element and will return the 
//result as a string. This works with every data type except for Arrays, null or Date. this last 
// 3 are identified as 'objects' by typeof but in order to check for that type other methods are requiered.

//Example:
typeof 5 // prints 'number'
typeof 'camilo'//prints a 'string'
typeof {}// prints 'object'
typeof true// prints 'boolean'


/* 6.TERNARY OPERATORS: is the only JavaScript operator that takes three operands.
*This operator is frequently used as a shortcut for the if statement.
*
*/
//Example
 function diagnosis(sickness){
    return sickness === 'cancer'? 'die': 'live';
 }
 
 console.log(diagnosis('cancer'));// prints  /die'
 console.log(diagnosis('cold'));// prints 'live'
 