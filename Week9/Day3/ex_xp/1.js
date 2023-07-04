// 🌟 Exercise 1 : Giphy API
// Instructions

// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.


function GiphyAPI() {
    fetch ("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((result) => {
        console.log('result: ', result)
        if (result.ok) {
            return (result.json())
        } else {
            throw new Error('error')
        }
    })
    .then((result2) => {console.log(result2)})
    .catch((err) => {console.log(err)})

}

// GiphyAPI()

// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

function GiphyAPI2() {
    fetch ("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((result) => {
        console.log('result: ', result)
        if (result.ok) {
            return (result.json())
        } else {
            throw new Error('error')
        }
    })
    .then((result2) => {console.log(result2)})
    .catch((err) => {console.log(err)})

}

// GiphyAPI2()


// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

async function asyncFunction() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (response.ok) {
            const data = await response.json();
            console.log(data.result)
        } else {
            throw new Error ('fetching error')
        }
    } catch (error) {
        console.log(error)
    }
}

// asyncFunction()


// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//print calling, wait 2 sec, print resolved