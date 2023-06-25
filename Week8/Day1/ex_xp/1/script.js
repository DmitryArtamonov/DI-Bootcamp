// Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.getElementsByTagName('h1')[0];
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.

const article = document.getElementsByTagName('article')[0];
lastp = article.lastElementChild;
article.removeChild(lastp);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener("click", changeH2BackgroundColor);

function changeH2BackgroundColor(){
    h2.style.backgroundColor = 'red'
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.getElementsByTagName('h3')[0];
h3.addEventListener("click", hideH3);

function hideH3(){
    h3.style.display = 'none'
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const button = document.getElementsByTagName('button')[0];
button.addEventListener("click", makeBold);

function makeBold(){
    document.body.style.fontWeight = 'bold'
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1.addEventListener('mouseover', randowTextSize)

function randowTextSize(){
    const size = Math.floor(Math.random() * 101);
    document.body.style.fontSize = `${size}px`
}

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const p2 = document.getElementsByTagName('p')[1];
p2.addEventListener('mouseover', fadeOut)

function fadeOut(){
    console.log('start');
    p2.style.transition = 'opacity 1s';
    p2.style.opacity = '0';
}

