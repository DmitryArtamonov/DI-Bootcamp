const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

toJS = morseString => {
    const toJSPromise = new Promise ((resolve, reject) => {
        const morseJS = JSON.parse(morseString);
        if (Object.keys(morseJS).length) {
            resolve(morseJS)
        } else {
            reject('error')
        }
    })
    return toJSPromise

}

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

toMorse = morseCodeJS => {
    const toMorsePromise = new Promise((resolve, reject) => {
        userString = prompt('input a word or a sentence')
        userArray = userString.toLowerCase().split('')
        userArray.forEach(element => {
            if (! morseCodeJS.hasOwnProperty(element)){
                reject('error')
            }
        });
        const code = userArray.map((element) => morseCodeJS[element])
        resolve(code)
    })
    return toMorsePromise

}

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

joinWords = morseTranslation =>{
    const output = morseTranslation.join("</br>")
    const div = document.createElement('div')
    div.innerHTML = output 
    document.body.appendChild(div)
}

toJS(morse)
.then((res) => toMorse(res))
.then((res2) => joinWords(res2))


// Chain the three functions.

