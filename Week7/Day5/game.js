function playTheGame(){
    let ans = confirm('Would like to play the game?');

    if (! ans){
        alert('No problem, Goodbye');
        return
    }    
    
    let num

    while (true){

        num = prompt('Enter a number between 0 and 10');
        num = parseInt(num)

        if (isNaN(num)){
            alert('Sorry Not a number');
            continue
        }

        if (num < 0 || num > 10){
            alert("Sorry it's not a good number");
            continue
        }
    
        break
    }

    const computerNumber = Math.floor(Math.random()*11)


    compareNumbers(num, computerNumber)

    return
}

function compareNumbers(userNumber,computerNumber){

    for (let i=0; i < 3; i++){

        console.log(userNumber)
        console.log(computerNumber)

        if (userNumber === computerNumber){
            alert('WINNER')
            return
        }

        if (i===2){break}
        
        if (userNumber > computerNumber){
            userNumber = parseInt(prompt("Your number is bigger then the computer's, guess again"))
        }
        
        else {
            userNumber = parseInt(prompt("Your number is smaller then the computer's, guess again"))
        }
    }

    alert('out of chances')
    return

}