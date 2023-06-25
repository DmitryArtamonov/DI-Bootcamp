setTimeout(giveAlert, 2000)
setTimeout(addDiv, 2000)

function giveAlert(){
    alert('Hello World')
}

function addDiv(){

    container = document.getElementById('container');
    if(container.children.length > 4){
        return
    }
    newP = document.createElement('p');
    newP.textContent = 'Hello World'
    container.appendChild(newP)
}

const timer = setInterval(addDiv, 2000)

button = document.getElementById('clear')
button.addEventListener('click', stopAdding)

function stopAdding(){
    clearInterval(timer)
}

