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

const shopping = groceries

// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
    groceries.totalPrice = 35

    alert(shopping.other.payed) // totalPrice: 35

// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
    groceries.other.payed = false

    alert(shopping.other.payed) // payed: false 