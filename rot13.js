const str = 'javascript is awesome';
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphabetLow = alphabet.map(x => {return x.toLowerCase()});

function rot13(letter){
    let index = alphabet.indexOf(letter);
    
    if (index >= 0)
        return alphabet [(index + 13) % 26];

    index = alphabetLow.indexOf(letter);

    if (index >= 0)
        return alphabetLow [(index + 13) % 26];
    
    return letter;

}
console.log(str.split('').map(rot13).join(''));