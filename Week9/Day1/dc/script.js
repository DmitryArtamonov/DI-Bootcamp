
document.forms[0].addEventListener('submit', function (event){
    event.preventDefault()

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;

    let myObj = {
        'name': fname,
        'lastname': lname
    };

    let output = document.getElementById('output')
    output.textContent = JSON.stringify(myObj)

})