// Retrieve the form and console.log it.

const myForm = document.forms[0];
myForm.addEventListener('submit', retrieve);

function retrieve(event){
    event.preventDefault();
    console.log(event.target);

// Retrieve the inputs by their id and console.log them.

    console.log(event.target.fname.value);
    console.log(event.target.lname.value);

// Retrieve the inputs by their name attribute and console.log them.

    const fname = myForm.elements.fname.value;
    const lname = myForm.elements.lname.value;

    console.log(fname);
    console.log(lname);

    let newUl = document.createElement('ul');
    newUl.classList.add('usersAnswer');
    document.body.appendChild(newUl)

    let liFname = document.createElement('li');
    liFname.textContent = fname;
    newUl.appendChild(liFname)
    
    let liLname = document.createElement('li');
    liLname.textContent = lname;
    newUl.appendChild(liLname)

}


// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.