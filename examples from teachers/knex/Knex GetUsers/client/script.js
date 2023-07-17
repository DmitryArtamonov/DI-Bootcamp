const button = document.getElementById("submit");

function getData() {
  fetch("http://localhost:3000/users/getUsers")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}

button.addEventListener("click", getData);
