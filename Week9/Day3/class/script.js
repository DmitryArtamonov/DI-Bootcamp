div = document.getElementById('mydiv')

function addRandomGif() {

    fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((result) => {return result.json()})
    .then((result2) => {
        console.log('res2', result2)
        url = result2.data.images.original.url
        console.log('url:', url)
        img = document.createElement('img')
        img.setAttribute('src', url)
        div.appendChild(img)
    })
    



}



addRandomGif()