const charData={
    'Height': 'height',
    'Gender': 'gender',
    'Birth Year': 'birth_year',
}

let h1 = document.createElement('h1')

const container = document.getElementById('container')
const find_button = document.getElementById('find_button')

find_button.addEventListener('click', find)

// Fetching function

async function fetchingFunc(url) {

    try{
        request = await fetch(url)
        if (request.ok){
            result = await request.json()
            return result
        } else {
            throw Error
        }

    } catch(err) {
        return false
    }

}


async function find(){

    // Container cleaning

    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    // Show loading animation

    let loadingDiv = document.createElement('div')
    loadingDiv.id = 'loadingDiv'
    let loadingAnimation = document.createElement('i')
    loadingAnimation.classList.add("fa-solid", "fa-circle-notch", "fa-spin", "fa-5x")
    loadingDiv.appendChild(loadingAnimation)
    loadingText = document.createElement('h1')
    loadingText.textContent = 'Loading...'
    loadingDiv.appendChild(loadingText)
    container.appendChild(loadingDiv)
    
    // Fetch data

    let charNum = Math.floor(Math.random() * 83 + 1)
    let result = await fetchingFunc(`https://www.swapi.tech/api/people/${charNum}`)

    if (result) {
        let data = result.result.properties
        let planetResult = await fetchingFunc (data.homeworld)

        // Add name
        console.log(data)
        h1.textContent = data.name    
        container.removeChild(loadingDiv)
        container.appendChild(h1)

        // Add data

        Object.keys(charData).forEach((element) => {
            let h2 = document.createElement('h2')
            h2.textContent = `${element}: ${data[charData[element]]}`
            container.appendChild(h2)
        })

        // Add homeworld
        
        let planetName = planetResult.result.properties.name
        h2 = document.createElement('h2')
        h2.textContent = `Homeworld: ${planetName}`
        container.appendChild(h2)

    } else {

        h1.textContent = 'Something goes wrong...'
        container.removeChild(loadingDiv)
        container.appendChild(h1)

    }

}

