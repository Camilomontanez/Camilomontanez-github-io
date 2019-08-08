/* 1. FUNCTIONS: is a set of instructions that we are able to to call upon when needed.
* 
*   there are two stages to creating a function:
*  Function Declaration/Definition = create the action you want the computer to perform by using parameters/placeholders.
*  Function Call/invocation/Execution  = is the invocation of the function to execute
* 
*
*  Function Declaration-- use the word function to declare and then give the function a name. 
*  Place the placeholders/parameters withing parenthesis and then open curly brackets,
*  wich will contain the body of the function.
*
*
*    Function Syntax:
*    function functionName(parameter1, parameter2,...){// create a name of a function after the key word function
*    body of the function goes here
*    }
*
*
*/

//Example:
 function printSomething(value){ // function definition
     console.log (value);
 }
 printSomething('functions are fun');// fuction call is done with the function name with arguments in parethesis
 
/* 2. DIfference between function parameters and arguments:
*  parameters are place holders for values while the arguments are the actual values. 
*  In the example above value  is the parameter while the the argument is the string 'functions are fun'
*/


/* 3. How do we assign a function to a variable? aka FUnction expressions
*  one of the greates features of java scripts is the ability to assing functions to variables
*  in order to do this we do it the same way we assing other data types to a variaable 
*  
*    Syntax:
*    var functionexpression = function functionName(parameter1, parameter2,...){ 
*                             body of the function goes here
*                             }
*/

//Example 

var printSomething = function (value){
     console.log (value);
 };

printSomething('someother thing');// you can make the function call by using the variable name and the arguments
 
 /* 4. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
*   How do we specify inputs, and how do we specify outputs?
*
*  Inputs are the arguments whe use to replace the parameters. Some functions depending on its desing dont need inputs
*  to execute in the case of function expressionr or in the case of functions that could work with ony one input.
*
*   the output of a function is defined by ITS RETURN STATEMENT, if no return statement is place in the body of the
*   functiion the function will always return undefined.
*/

/* 5. Scopes in functions:  a function can access variables in global scope or parents functions
*   but the opposite is not true. Because every variable created withing a function is held
*   to local scope, meaning it can ONLY be accessed withing the function.
*
*/
//Example:
var x = "is outside of the function and therefore is global scope";
exampleFunction();
function exampleFunction() {
    var x = 'boo';
    console.log(x);//prints boo because var x is function scoped inside funnctiion
    
}

console.log(x);// it can access value of varaible x because it is on the global scope, it does not refer to the x inside the function

/* Clousures: are function within functions. Closures can be identified if they fulfill two characteristics:
*  1. A function must have access to the parent scope even after parent fucntion has returned.
*  2. A function using variabes from a parent scope

//What does that mean  when a function creates a closure around a variable or a parameter/argument?
 it means that varaible has a private scope that can only be accessed by an inner function/closure. This helps to decrease 
 the probability that someone can change a variable we want to keep untoched and the only way it can be accessed is inderectly.

*/

// example:

function closureExp (){
  let name = 'camilo'; // why is this not defined
  
  return function(lastName){
   
   return ` My name is ${name} ${lastName}`
  }
 
}

closureExp()();

 var g = closureExp(); 

  g('montanez');
  
  