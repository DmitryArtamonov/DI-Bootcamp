const planets =[
    {
        'name': 'Mercury',
        'color': 'yellow',
        'moons': 0
    },
    {
        'name': 'Venus',
        'color': 'white',
        'moons': 1
    },
    {
        'name': 'Earth',
        'color': 'blue',
        'moons': 1
    },
    {
        'name': 'Mars',
        'color': 'red',
        'moons': 3
    }
]

const parent = document.getElementsByTagName('section')[0];

for (let planet of planets){
    div = document.createElement('div');
    div.classList.add('planet');
    div.textContent = planet['name'];

    div.style.backgroundColor = planet['color'];
    margin = 120
    for (i = 0; i < planet['moons']; i++){
        moon = document.createElement('p')
        moon.classList.add('moon');
        moon.style.marginLeft = `${margin + i * 50}px`
        div.appendChild(moon)
    }
    parent.appendChild(div);

}