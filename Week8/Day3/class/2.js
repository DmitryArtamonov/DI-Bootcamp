const famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

// Create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator


const names = famousPeople.map((element) => element.name)

console.log(names)

const nameJob = famousPeople.map((element) => ({name: element.name, age:element.age}))


console.log(nameJob)

const studentsFootball = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55}
   ];

const newArray = studentsFootball.map((element) => ({name: element.name, score: element.score, isAboveAverage: element.score > 50}))

console.log(newArray)
