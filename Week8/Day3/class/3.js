const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const positive = numbers.filter((element) => element > 0)
console.log(positive)

const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
 ]; 

const newCharList = characters.filter((element) => element.series.includes('Star Trek: The Next Generation'))
console.log(newCharList)



const colors = ["blue", "red", "red", "blue", "yellow"]

const newColors = colors.filter((element, i) => !colors.slice(0, i).includes(element))


console.log(newColors)