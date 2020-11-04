var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

for(i = 0; i < n; i++){
    let x = lines.shift().trim();
    let casas = parseInt(lines.shift());
    let aux = '';
    for(j = 0; j < x.length; j++){
        let numero = parseInt(x[j].charCodeAt(0) - casas);
        if(numero >= 65){
            aux += String.fromCharCode(numero); 
        }else{
            aux += String.fromCharCode(26 + numero); 
        }
     
    }

    console.log('' + aux + '');
}

