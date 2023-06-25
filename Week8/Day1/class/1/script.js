const btnRed = document.querySelector('#red');
const btnBlue = document.querySelector('#blue');

btnRed.addEventListener("click", changeColor);
btnBlue.addEventListener("click", changeColor);

function changeColor(e){
    document.body.style.backgroundColor = e.target.id
}
