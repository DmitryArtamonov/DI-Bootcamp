// 🌟 Exercise 1 : List Of People
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

const people = ["Greg", "Mary", "Devon", "James"];
people.shift()

// Write code to replace “James” to “Jason”.

people[2] = 'Jason'

// Write code to add your name to the end of the people array.


people.push('Dmitry')

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf('Mary'))

// Write code to make a copy of the people array using the slice method.

// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

let people2 = people.slice(1,-1)

// Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf('Foo'))

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people[people.length - 1]

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

for (let person of people){
    console.log(person)
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

for (let person of people){
    console.log(person)
    if (person === "Devon"){
        break
    } 
}


// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.

const color = ['green', 'cyan', 'yellow', 'white', 'black']

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

color.forEach(function(value, index){
    console.log(`My #${index + 1} choice is ${value}`)
})

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let suffixes = {
    '1':'st',
    '2':'nd',
    '3':'rd',
    '4':'th',
    '5':'th'
}

color.forEach(function(value, index){
    console.log(`My ${index + 1}${suffixes[index + 1]} choice is ${value}`)
})


// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let num
do {
    num = prompt('give a number')
console.log(typeof(num))
} while (Number(num) < 10)




// 🌟 Exercise 4 : Building Management
// Instructions:

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },

    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

console.log(building['numberOfFloors'])

// Console.log how many apartments are on the floors 1 and 3.

console.log(building['numberOfAptByFloor']['firstFloor'])
console.log(building['numberOfAptByFloor']['thirdFloor'])

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

let tenantName = building['nameOfTenants'][1]
console.log(tenantName)
console.log(building['numberOfRoomsAndRent'][tenantName.toLowerCase()][0])

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

if (building['numberOfRoomsAndRent']['sarah'][1] + building['numberOfRoomsAndRent']['david'][1] > building['numberOfRoomsAndRent']['dan'][1]){
    building['numberOfRoomsAndRent']['dan'][1] = 1200
}

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    'dad': 'John',
    'mom': 'Kate',
    'son': 'Tom'
}

for (key in family){
    console.log(key)
}

for (key in family){
    console.log(family[key])
}

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let text = '' 
for (key in details){
    text += `${key} ${details[key]} `
}
console.log(text.trim())


// Exercise 7 : Secret Group
// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

let societyName = ''
for (friendName of names.sort()){
    societyName += friendName[0]
}
console.log(societyName)