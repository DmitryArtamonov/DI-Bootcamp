const hello = document.getElementById('hello');
hello.addEventListener('click', color);
hello.addEventListener('mouseover', bold);
hello.addEventListener('mouseout', size);
hello.addEventListener('dblclick', padding);

function color(){
    hello.style.color = 'green';
}

function bold(){
    hello.style.fontWeight = 'bold';
}

function size(){
    hello.style.fontSize = '20px';
}

function padding(){
    hello.style.padding = '50px';
}