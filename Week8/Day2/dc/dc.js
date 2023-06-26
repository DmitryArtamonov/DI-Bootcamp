let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

groceries.fruits.forEach(fruit => {
    console.log(fruit)
});

// Create another arrow function named cloneGroceries.

const cloneGroceries = () => {

// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
    const user = client;

// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
    client = 'Betty'

    console.log(user) // 'John'
    console.log(client) // 'Betty'

// In the function, create a variable named shopping that is equal to the groceries variable.
    const shopping = groceries

// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
    groceries.totalPrice = 35

    console.log(shopping) // totalPrice: 35

// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
    groceries.other.payed = false

    console.log(shopping) // payed: false 
}

// Invoke the cloneGroceries function.

cloneGroceries()
