// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

makeAllCaps = words => {
    const prom = new Promise((resolve, reject) => {
        if (words.every((word) => typeof word === "string")) {
            res = words.map((word) => word.toUpperCase())
            resolve(res)
        } else {
            reject('Error: not a string in the array')
        }
    })
    return prom
}

sortWords = words => {
    const prom = new Promise((resolve, reject) => {
        if (words.length > 4) {
            res = words.sort()
            resolve(res)
        } else {
            reject('Error: < 5 elements in the array')
        }
    })
    return prom
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))




