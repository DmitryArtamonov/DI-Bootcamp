// Exercise 1 : Print Full Name
// Instructions
// Create a function called printFullName.
// The function should return a string like the example below

printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`

function printFullName({first, last}){
    console.log(`Your full name is ${first} ${last}`)
}

// Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)


// Exercise 2 : Keys And Values
// Instructions
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj){

    const keyValuesArray = Object.entries(obj)
    const sortedArray = keyValuesArray.sort((a,b) => {
        if (a>b){
            return 1
        };
        if (a<b){
            return -1
        };
        return 0

    })

    res = [[],[]]

    sortedArray.forEach ((element) => {
        res[0].push(element[0])
        res[1].push(element[1])
    })

    return res
}
    
console.log(keysAndValues({ a: 1, c: 3, b: 2}))

// Exercise 3 : Counter Class
// Instructions
// Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count); //3