let allBoldItems

function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
    console.log(allBoldItems);
}

function highlight(){
    for (item of allBoldItems){
        item.style.color = 'blue'
    }
}

function returnItemsToDefault(){
    for (item of allBoldItems){
        item.style.color = 'black'
    }
}

p = document.getElementsByTagName('p')[0];
getBoldItems()
p.addEventListener('mouseover', highlight);
p.addEventListener('mouseout', returnItemsToDefault);

