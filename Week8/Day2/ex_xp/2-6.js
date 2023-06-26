
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1

console.log(experiencePoints)


// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

const isString = (param) => typeof param === 'string'

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sumFunction = (a,b) => a + b


// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function func1(weight){
    return weight * 1000
}

console.log(func1(1.5))

const func2 = function(weight){
    return weight * 1000
}

console.log(func2(2.5))

const func3 = weight => weight * 1000

console.log(func3(3.5))


// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

((numberOfChildren, partnersName, geographicLocation, jobTitle) => {
    const text = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
    document.getElementById('text').contentText = text
})(2, 'Helen', 'Sweden', 'developer')

