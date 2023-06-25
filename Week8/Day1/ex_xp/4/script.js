const MyForm = document.forms.MyForm

MyForm.addEventListener('submit', volume)

function volume (event){
    event.preventDefault();
    rad = MyForm.radius.value
    vol = 4 / 3 * Math.PI * rad ** 3
    MyForm.volume.value = vol
}