// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...data){

    res = data.every(x => Boolean(x)==true)

    return res
}



console.log(allTruthy(true, true, true))

console.log(allTruthy(true, false, true))

console.log(allTruthy(5, 4, 3, 2, 1, 0))

console.log(allTruthy(1, 1, 20))