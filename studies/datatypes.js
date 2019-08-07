/*DATATYPES
*Variables can be assign to different types of data.
*there are different  types of data that are classifed 
*in two categories: SIMPLE and COMPLEX
*
*/

// 1.Simple Data Category: They have definite size when stored in memory and 
// they cannot store or collect other values besides themselves. 
// there are 5 types in this category.

//1.1 NUMBERS: are positive,negative and decimal values.
// Example:
    var numeroPositivo = 2;
    var numeroNegativo = -10;
    var numeroDecimal = 1.5;
    console.log(numeroPositivo,numeroNegativo,numeroDecimal);

//1.2 STRINGS: text or strings of characters surrounded by quotes.
//Example
  var stringLiteralorEmptyString = "";
  var youCanUseDoubleQuotes = "like this";
  var youCanUseSingleQuotes = 'like this';
  var youCanCombineLettersAndNumbers = 'letters and numbers 10,12,12,100'

// you can access different letter of a string but using the index(starting at zero) and braquet notation like so:
//Examples of string characte access
  let test = 'rochandroll';
  let theLetterAofTheStringAbove = test[4]// test[4] is equal at the letter of index 4 of the string above,meaning 'a'
  let youCanAccessTheLastCharacterOfTheWordLikeThis = test[test.length -1]// this is equal to 'l' .
  console.log(test[4]); // 'a'
  console.log(youCanAccessTheLastCharacterOfTheWordLikeThis);// 'l'

//1.3 BOOLEANS: can only have true or false values.

 var BooleanCanBeTrue = true;
 var BooleanCanBeFalse = false; 

//1.4 UNDEFINED:`Argumments that do not have a defined or initilized value.Its not an object and it has no mehtods.`
//               variables that are not assigned a value are also undefined, or accessing objects/arrays at a position 
//               that doesn't exist also comes back as undefined. Functions that not not have a return value also evaluate
//               to undefined.
//Example:
  function noReturnStamentReturnsUndefined(a,b){
      a+b;
  }
  
  console.log(noReturnStamentReturnsUndefined(10,12));//return undefined because the function does not return anything.

//1.5 NULL: is a value that has intentionally being defined as none existent.
let allowThisVariableToBeNull = null;
console.log(allowThisVariableToBeNull);

//1.6 NaN:Represents Not A Number. It is the return value when math functions fail.
//Example:
function thisWillReturnNaN(a,b){
      return a*b;
  }
  thisWillReturnNaN(10,'notHappening');//returns NaN
 
/*1.7 INFINITY: is a numeric value representing infinity
*    -INFINITY:is a numeric value representing  negative infinity
*/
//Example:
console.log(999999999999999999999**100);// prints infinity

//2.COMPLEX DATA CATAGORY: can hold or collect other values, including other Arrays.

/*Arrays: is a collections that holds different types of data and hold the data in
*places called indexes. I other words it stores a list of different types of data values 
*as list as ONE (in a zero indexed list).
*/
//Example: var array1 =["index0", "index1","index2"];

 var arrayLiteral =[];// this is an empty array
 var arrayExample = [10,11,12,13];// here is an array with 4 elements
 var arrayWIthManyDataTypes =["camilo",123,false,[10,10,10]];

/* Accesing Array elements
*values in an array are stores in a particular order. This order is maintained 
*by assigning each element in an Array a number, which is refered to as the
*element index. The first element of an aaray will always have the index of 0.
*
*/

//Example:
var arraySample = [1,2,3,4]
var accessElementAtIndex0 = arraySample[0];
console.log(accessElementAtIndex0)// prints 1
var accessTheLastElementOfArray = arraySample[arraySample.length -1]
console.log(accessTheLastElementOfArray)// prints 4

/*OBJECTS:Is another type of javaScript collection. However, unlike an Array, values inside 
*an Object are not ordered, not do they have an index.An object is a colletion of key-value-pairs.
*a key Key is the name of the propety and its pair is the value that corresponds to that name or key.
*
*/
//Example

var exampleOfObjectLiteral = {}// the object is defined by using curly brackets
var objectWithOneKeyValuePair ={
    mynombre:'jay'
}
var multipleKeyValuePairsAndDifferentDataTypes ={
    name:'kaelyn cresfield',
    age: "young",
    address:'somewhere in NOLA',
    person: true
    
}; 

//HOW TO ACCESS OBJECTS: there are two ways, dot notation and bracket notation.
//Dot notation
console.log(multipleKeyValuePairsAndDifferentDataTypes.name);//will print 'kaelyn crsfield' with dot notation
//bracket notation
console.log(multipleKeyValuePairsAndDifferentDataTypes['person']);// will pring true

// We can also store keys in variables as strings
var key ='name';
console.log(multipleKeyValuePairsAndDifferentDataTypes[key]);// prints 'kaelyn cresfield'

//HOW TO ADD PROPERTIES(keysvaluepairs) TO OBJECTS: its can be done with bracket and dot notation
multipleKeyValuePairsAndDifferentDataTypes.degree = 'ops spark';// it adds the key value pair degree:'ops spark'
multipleKeyValuePairsAndDifferentDataTypes['wanttobe'] ='firefighter';//it adds the key value pair wantobe:'firefighter'

// FUNCTIONS - is a set of instructions that we are able to to call upon when needed. Is a complex data type
//EXAMPLE AND DEFFINITION WIL LBE FOUND IN LATER FUNCTION SECTION

//Example:
  function reversa(string){
    return  string.split("").reverse().join("");
  }
  
  reversa('camilo');


//What is the difference between primitive/simple and complex data types?
//Simple data types can only hold one value and are copied by value, they are also inmutable
//complex data can hold an infinity about of values and data types and are copied by reference.they are also mutable.

/*Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
*What does that mean, and how are they different?
* This means that primitive values are saved in the computer under the actual value because they
* dont use much space in the memory. DIfferent from this, Complex data types are saved by the reference 
*of where they are saved rather than their actual value. A reference is like the address 
*of where  the information of complex data types is stored at.
*/
