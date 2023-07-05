const myForm = document.forms.myForm
myForm.addEventListener('submit', giphy)
myForm.addEventListener('reset', deleteAll)
const container = document.getElementById('gifContainer')
let count = 1

async function giphy(event) {
    try{
        event.preventDefault()
        let tag = myForm.tag.value
        console.log('tag:', tag)
        request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${tag}`)
        if (request.ok){
            result = await request.json()
            console.log(result)
            imgUrl = result.data.images.original.url
            addGif(imgUrl)
        } else {
            throw new Error('Reponse is not OK')
        }
    } catch(err) {
        console.log(err)
    }

}

function addGif(url){
    let newDiv = document.createElement('div')
    newDiv.id = `GIF${count}`
    count ++
    let img = document.createElement('img')
    img.setAttribute('src', url)
    newDiv.appendChild(img)
    let lineBreak = document.createElement('br')
    newDiv.appendChild(lineBreak)
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', removeGif)
    newDiv.appendChild(deleteButton)
    container.appendChild(newDiv)
    
}

function removeGif(event){
    id = event.srcElement.parentElement.id
    console.log('ID: ', id)
    div = document.getElementById(id)
    container.removeChild(div)

}

function deleteAll(){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}