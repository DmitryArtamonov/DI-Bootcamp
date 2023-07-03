const field = document.getElementById('field')
const buttonX = document.getElementById('button_X')
const buttonO = document.getElementById('button_O')
let playerSymbol
let computerSymbol

function newField(){
    while (field.firstChild){
        field.removeChild(field.firstChild)
    }
    for (i=1; i<10; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('cell')
        newDiv.id = `c${i}`
        field.appendChild(newDiv)
    
    }
}

function startGame(symb){
    playerSymbol = symb
    document.body.removeChild(document.getElementById('chooseSymbol'))
    newField()
    for (i=1; i<10; i++){
        let cell = document.getElementById(`c${i}`)
        cell.addEventListener('click', (event) => {
            cell.textContent = playerSymbol
        })
    }
}

buttonX.addEventListener('click', (event) => startGame('X'))
buttonO.addEventListener('click', (event) => startGame('O'))

