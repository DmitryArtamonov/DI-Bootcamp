const urlParam = new URLSearchParams(window.location.search)

const fname = urlParam.get('name');
const lname = urlParam.get('lastName');

div = document.getElementById('result')
p = document.createElement('p')
p.textContent = `${fname} ${lname}`
div.appendChild(p)