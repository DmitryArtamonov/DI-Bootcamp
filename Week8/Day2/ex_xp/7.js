// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

((userName) => {
    navbar = document.getElementById('navbar');
    div = document.createElement('div');
    div.textContent = userName;
    img = document.createElement('img');
    img.setAttribute('src', `${userName}.jpg`);
    div.appendChild(img);
    navbar.appendChild(div);
} )('John')