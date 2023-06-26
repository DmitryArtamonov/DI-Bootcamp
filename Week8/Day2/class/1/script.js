// Exercise 1:
// Return the name of the the user, the user's name is a parameter. Do this exercise,
// - first by using function declarations
// - then function expression,
// - then arrow function

const user = 'John'


function user1 (user){
    console.log(user)
}

const user2 = function(user){
    console.log(user)
}

const user3 = user => console.log(user)

user1(user)
user2(user)
user3(user)



// Exercise 2: Function & Arrow function & Ternary Operator
// Check if the user's age is higher than 18. Use ternary operator.
// if the user's age is higher than 18, return "You can drive"
// else, return "You cannot drive"
// Do this exercise,

const age = 20;

// - first by using function declarations

function func1(age){
    age > 18 ? console.log("You can drive") : console.log("You cannot drive")
}

const func2 = function(age){
    age > 18 ? console.log("You can drive") : console.log("You cannot drive")
}

const func3 = age => age > 18 ? console.log("You can drive") : console.log("You cannot drive")


// - then function expression,
// - then arrow function

func1(age);
func2(age);
func3(age);


// 1. Create a function named starWars that takes no parameter.
// 2. The function should declare a variable characters equal to an empty array
// 3. In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// 4. In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// 5. Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once

function starWars(){
    const characters = []

    function createCharacter(fname, lname){
        if (lname === null){lname = 'Smith'}
        const name = `${fname} ${lname}`;
        characters.push(name);
    }


    function displayCharacter(){

        for (charName of characters){
            const p = document.createElement(p)
            p.textContent = charName
            document.body.appendChild(p)
        }
        
    }
    
    createCharacter('Dart', 'Veider')
    createCharacter('Luke', 'Skywalker')
    createCharacter('Jabba')

    displayCharacter()

}

starWars()