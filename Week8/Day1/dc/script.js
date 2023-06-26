const form = document.forms.libform;
const inputs = form.querySelectorAll('input');



form.addEventListener('submit', madLibs)


function madLibs(event){
    event.preventDefault()
    const words = [];
    let story = '';
    for (let input of inputs) {
        words.push(input.value);
        story += input.value + ' '

    }

    document.getElementById('story').textContent = story;
    console.log(words);
}