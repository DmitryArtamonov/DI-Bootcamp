const students = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];

const scoreSum = students.reduce((acc, ell) => acc += ell.score, 0)

console.log(scoreSum)


let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

const voted = voters.reduce((acc, ell) => ell.voted ? acc +1 : acc, 0) 

console.log(voted)