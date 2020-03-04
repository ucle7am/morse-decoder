const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let a = 0; a < expr.length; a += 10) {
        arr.push(expr.slice(a, a + 10));
    }

    /*for (let b = 0; b < arr.length; b++) {
        if(arr[b] == '**********'){
            arr.splice(b,1,' ');
        }   
    }*/
    let str = '';
    let k = 0;

    for (let i = 0; i < arr.length; i++) {
        k = 0;
        for (k; k < arr[i].length; k+=2) {
            if(arr[i][k]+arr[i][k+1] == '10') str += '.';
            else if(arr[i][k]+arr[i][k+1] == '11') str += '-';
        }
        arr.splice(i,1,str);
        str = '';
    }

    for (let c = 0; c < arr.length; c++) {
        if(arr[c] !== ''){
            arr.splice(c,1,MORSE_TABLE[arr[c]]);
        }    
    }

    let res = '';

    for (let b = 0; b < arr.length; b++) {
        if(arr[b] == ''){
            res+= ' ';
        }else{
            res += arr[b];
        }   
    }
    
    return res;
}

module.exports = {
    decode
}