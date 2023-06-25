const colors = ["blue", "yellow", "green", "pink"];
const div = document.getElementById('container')

for (color of colors){
    const newButton = document.createElement('button')
    
    newButton.innerHTML = color
    newButton.value = color
    div.appendChild(newButton)
    newButton.addEventListener("click", changeColor);
}