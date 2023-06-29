function anagramCheck(string1, string2){
    stringStriped1 = string1.replaceAll(' ', '');
    stringStriped2 = string2.replaceAll(' ', '');

    arr1 = stringStriped1.toLowerCase().split('').sort();
    arr2 = stringStriped2.toLowerCase().split('').sort();

    stringSorted1 = arr1.join('');
    stringSorted2 = arr2.join('');

    return stringSorted1 === stringSorted2

}

console.log(anagramCheck('Astronomer','Moon starer')); //true
console.log(anagramCheck('School master','The classroom')); //true
console.log(anagramCheck('The Morse Code','Here come dots')); //true

console.log(anagramCheck('boom','mood')); //false





