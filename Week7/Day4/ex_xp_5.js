// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it


const div = document.getElementById('container');
console.log(div);

// Change the name “Pete” to “Richard”.

let ul = document.getElementsByTagName('ul')[0];
let li = ul.lastElementChild;
li.textContent = 'Richard';

// Delete the second <li> of the second <ul>.

ul = document.getElementsByTagName('ul')[1];
li = ul.getElementsByTagName('li')[1];
ul.removeChild(li);

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

for (ul of document.getElementsByTagName('ul')){

    li = ul.getElementsByTagName('li')[0];
    li.innerHTML = 'Dmitry';

}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

for (ul of document.getElementsByTagName('ul')){
    ul.classList.add('student_list');
}
ul = document.getElementsByTagName('ul')[0];
ul.classList.add('university','attendance');

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.

div.style.backgroundColor = 'lightblue';
div.style.padding = '5px';

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)

for (li of document.getElementsByTagName('li')){
    if (li.innerHTML === 'Dan'){
        li.style.display = 'none';
    }
}

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)

for (li of document.getElementsByTagName('li')){
    if (li.innerHTML === 'Richard'){
        li.style.border = '1px solid black'
    }
}

// Change the font size of the whole body.
let body = document.body;
body.style.fontSize = '20px';



// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (div.style.backgroundColor === 'lightblue'){
    text = 'Hello ';
    for (user of div.getElementsByTagName('li')){
        user = user.innerHTML
        text += `${user} and `
    } 
    if (text.length > 6){
    text = text.slice(0, text.length - 4)
    alert(text)
    }
}