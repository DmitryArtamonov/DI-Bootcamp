// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

const allBooks = [
    {
        'title': 'The Adventures of Huckleberry Finn',
        'author': 'Mark Twain',
        'image' : 'https://d3i5mgdwi2ze58.cloudfront.net/znuxxu2npw851eeboqayu3e35udn',
        'alreadyRead': true
    },
    {
        'title': 'On the Origin of Species',
        'author': 'Charles Darwin',
        'image' : 'https://d3i5mgdwi2ze58.cloudfront.net/oiuxldpvyrr9rmib9ye8lrxzu0j1',
        'alreadyRead': false
    }

]

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const parent = document.getElementsByClassName("listBooks")[0];
const div = document.createElement('div');
for (book of allBooks){
    const bookElement = document.createElement('p');
    bookElement.textContent = `${book['title']} written by ${book['author']}`;
    const pic = document.createElement('img');
    console.log(pic)
    pic.setAttribute('src', book['image']);
    pic.setAttribute('width', '100px')
    div.appendChild(bookElement);
    div.appendChild(pic);

    if(book['alreadyRead']){
        bookElement.style.color = 'red'
    }
}
parent.appendChild(div);
