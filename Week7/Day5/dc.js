function chorus(bottles, take){
    if (take > bottles){
        take = bottles;
    }
    console.log(`${bottles} bottles of beer on the wall`);
    console.log(`${bottles} bottles of beer`);
    console.log(`Take ${take} down, pass ${['them','it'][Number(take===1)]} around`);
    console.log(`${bottles - take} bottles of beer on the wall`);
    console.log('');
    return (bottles - take);
}

let bottles = prompt("How many bottles?");
let take = 1;
do{
    bottles = chorus(bottles, take);
    take += 1;
}while(bottles != 0)

console.log('no bottle of beer on the wall');