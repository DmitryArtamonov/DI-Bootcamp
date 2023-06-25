let box = document.getElementById('animate');
let marg = 0;
let interval

function myMove(){
    console.log('button!')
    interval = setInterval(moveBox, 1);
}


function moveBox(){
    marg +=1;
    box.style.left = `${marg}px`;
    if (marg > 350){
        clearInterval(interval)
    }
}