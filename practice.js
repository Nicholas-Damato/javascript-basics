//////////////////PROBLEM 1////////////////////

//Create a variable called myName that is a string data type

var myName = 'Nicholas';

//////////////////PROBLEM 2////////////////////

//Create a variable called myAge that is a number data type

var myAge = 22;

//////////////////PROBLEM 3////////////////////

//Create a variable called lovesCode that is a boolean data type

var lovesCode = true;

//////////////////PROBLEM 4////////////////////

//Create a variable called greatestFear that is undefined because we fear nothing

var greatestFear = undefined;

//////////////////PROBLEM 5////////////////////

//Create a variable called devMountainGoal that is null because we are just starting out

var devMountainGoal = null;

//////////////////PROBLEM 6////////////////////

//Create a function declaration called greeting that
//accepts name as its only parameter.
//greeting should return the string "Hello, "
//plus the value of the name parameter.

function greeting(){
  console.log('Hello', myName);
}

greeting();
//////////////////PROBLEM 7////////////////////

//Write a function expression called newGreeting.
//Give it the same functionality as the function greeting in Problem 6.

var newGreeting = function() {
  console.log('Hello', myName);
}

newGreeting();

//////////////////PROBLEM 8////////////////////

//Create an array called groceries with the values
//"apples", "milk", "eggs", "bread"

var groceries = ['apples', 'milk', 'eggs', 'bread'];

//////////////////PROBLEM 9////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy (a boolean).

var dog = {name: 'Billy', color: 'black', age: 6, goodBoy: true};

//...access the dog's name from the object and assign it to a
//variable called devMountainClassPet.

var devMountainClassPet = dog.name;

console.log(devMountainClassPet)

//////////////////PROBLEM 10////////////////////

//Write a function called nameCheck that takes in a name parameter.
//nameCheck should check if the name equals 'Steven'. If it does,
// return 'What is up Steven?'
//If the name parameter is Bryan, return 'Hey Bryan!'
// If the name parameter is anything else, return 'Cool name, NAMEPARAM'
// with NAMEPARAM being the name parameter being passed in (not literally NAMEPARAM)


  function nameCheck(nameGoesHere){
    if ( nameGoesHere === 'Steven'){
    return console.log('What is up', nameGoesHere + '?')
    }
    else if ( nameGoesHere === "Bryan"){
      return console.log('Hey', nameGoesHere + '!')
    }
    return console.log('Cool name,', nameGoesHere)
}

nameCheck('Nick');
//////////////////PROBLEM 11////////////////////

// Create a function called add that takes in two parameters
// that will be numbers.
// The add function should return the two parameters added together

var add = function(num1, num2){
      return (num1 + num2);
}

console.log(add(5,6))

//Now invoke add, passing in the numbers 3 and 4
//storing the result in the variable mathSum.

var mathSum = add(3,4);

console.log(mathSum)

//////////////////PROBLEM 12////////////////////

//Write a function called faveColorFinder that takes in one parameter called color
// that will be a string.
// If the passed in color equals 'red', return 'red is a great color'
// If the passed in color equals 'green', return 'green is a solid favorite color'
// If the passed in color equals 'black', return 'so trendy'
// Otherwise, you should return the string 'you need to evaluate your favorite color choice'

function faveColorFinder(color){
  if (color == 'red'){
    return console.log(color, 'is a great color')
  }
  if (color == 'green'){
    return console.log(color, 'is a solid favorite color')
  }
  if (color == 'black'){
    return console.log('so trendy')
  }
  else if (color !== 'black', 'red', 'green'){
    return console.log('You need to evalute your favorite color choice')
  }
}

faveColorFinder('black')

// This is just practice with the else statement
function favCarMake(car){
  if (car == 'Nissan'){
    return console.log('Yes that is your favorite car make')
  }
  else {
    return console.log('That is not your favorite car make')
  }
}
favCarMake('Nissan')
// SORRY FOR THE CLUSTER, JUST TESTING


//////////////////PROBLEM 13////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
//all within different scopes.
//Given the functions and variables above, edit the arrays
//below to contain only the appropriate variable names
//as strings.

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "rubberDuck"];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck","rubberDuck"];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck","realDuck","rubberDuck"];

//////////////////PROBLEM 14////////////////////

//Create a variable called age with your age assigned to you

// Code Here

// FLASH FORWARD TO NEXT YEAR
// reassign the value of age to be one greater than it was, because, we all get older

// Code Here

// Good news! We can live forever. Set your age to 999

// Code Here
