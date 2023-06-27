// Exercise 1 : Menu


// Using this array :

const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]


// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
const isAnyDesert = menu.some((course) => course.type === "dessert")
console.log('isAnyDesert', isAnyDesert)

// Using an array method, check if all the elements in the array are starters.
const areAllStarters = menu.every((course) => course.type === "starter")
console.log('areAllStarters', areAllStarters)

// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
if (! menu.some((course) => course.type === "main course")){
    menu.push({type:'main course', name:'pizza'})
}
console.log('menu', menu)

// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

const vegMenu = menu.map((element, index) => {
    let isVeg = vegetarian.some((vegElement) => element.name.toLowerCase().includes(vegElement))
    
    element.vegetarian = isVeg
    return element
})



// Exercise 2 : Chop Into Chunks
// Instructions
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
// Example:

// console.log(string_chop('developers',2)); 
// ["de", "ve", "lo", "pe", "rs"] 

function string_chop (text, amount){
    const res = [];
    for (let i = 0; i < text.length; i += amount){
        res.push(text.slice(i, i + amount));  
    } 
    return res
}

console.log(string_chop('developers',2))

// Exercise 3 : You Said String ?
// Instructions
// Write a JavaScript function to find a word within a string.
// console.log(search_word('The quick brown fox', 'fox')); 
// "'fox' was found 1 times." 


function search_word(text, word){
    const textArray = text.toLowerCase().split(' ')
    const amount = textArray.filter((element) => element === word).length
    return `'${word}' was found ${amount} times.`
}

console.log(search_word('The quick brown fox', 'fox'));

// Exercise 4 : Reverse Array
// Instructions
// Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

function reverseArray(array){
    length = array.length
    for (i=0; i < length / 2; i++){
        let tmp = array[i];
        array[i] = array[length - i - 1]
        array[length - i - 1] = tmp
    }
    return array
}

reverseArray([1,2,3,4,5])
reverseArray([1,2,3,4,5,6,7,8,9,10])
