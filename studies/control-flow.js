/*
*CONTROL FLOW
*  
*CONDITIONAL STATEMENTS
*A conditional statement is a set of commands that executes if a specified condition is true.
*javaScript supports two conditional statements: if...else and switch. 
*
*
*/

/*1. 'if' - We use 'if' to start a conditional statement and as long as the condition inside is met thereforegiving us back the boolean of true, and action will be executed 
*
*
*         Syntax:    if (condition) {
*                      statement_1;
*                     }
*/

// 2. 'else if' statement - is a conditional stament used after the the inital if 
//statment, where another conditions is needed in the logic flow.

//3. 'else' statment - its used as a defautl statment at end of the logic flow of conditional statments. 

// Example of conditional staments if, else if and else
    function myDogsReactionToThings(thing){
        if (thing === "ball") {
            return "dog wags tail";
        } else if ( thing === "squirrel") {
            return "dog chases squirrel";
        } else {
            return " dog remains calm";
        }
    }
    
    myDogsReactionToThings("ball");
    
/* 4. switch - is another form of control flow and is used when there are too many options to choose from and you want to 
*make your code easier to follow. Swich statment matches the values and matches 
*with the right statment which then is executed.


    Syntax:
    
    switch (expression) {
        case label_1:
        statements_1
        break;
        case label_2:
        statements_2
        break;
        ...
        default:
        statements_def
        break;
    }
*/
 // Example of switch
 
 function whatShouldIDo(event){

    switch (event){
        case "hurricane":
        console.log("hurricane party");
        break;
        case "rain":
        console.log("take a shower outsie");
        break;
   }

}

whatShouldIDo('hurricane');

/*What are the benefits of using an `if` statement over a `switch` statement?
*
* if-then-else statement can test expressions based on ranges of values or conditions,
* while switch statements tests only a singular value. 
*/
