// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });

// [2,4,6]


// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );

// [1,2,0,1,2,3]



// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// What is the value of i ?

// 5


// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const array = [[1],[2],[3],[[[4]]],[[[5]]]]

newArray = array.map((element) => typeof element[0] === 'number' ? element[0]: element[0][0])
console.log(newArray)

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newGreeting = greeting.map((element1) => element1.reduce((accum, element2) => accum + ' ' + element2))
const newGreeting2 = newGreeting.reduce((acc, elem) => acc + ' ' + elem)

console.log(newGreeting)
console.log(newGreeting2)

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
res = trapped

while (typeof res[0] !== 'number'){
    res = res.map((elem) => elem[0])
}

console.log(res)
