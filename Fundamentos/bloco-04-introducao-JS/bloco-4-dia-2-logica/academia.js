/*  Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 
Essa função deve receber dois parâmetros: 
base e altura e retornar um objeto no formato: 
{ area: 0, perimetro: 0 } 
perimetro = (base *2) + (altura * 2)
area = base * altura
*/

function medidas(base, altura) {
    let areaPerimetro = {
        area: base * altura,
        perimetro: (base *2) + (altura * 2),
    }
    return areaPerimetro
}

console.log(medidas(5, 13));


/* Crie uma função que, dado um array de números inteiros, 
retorne a quantidade de números pares e ímpares no formato: 
{
 pares: 0, 
 ímpares: 0 
} 
*/

let numerosX = [3048, 245, 2, 79, 91, 38, 53, 1029474, 6, 10384, 34235, 24123, 34, 3542];
let resultsPar = 0;
let resultsImpar = 0;
let check = {};

function parImpar(num) {
    for(index = 0; index < num.length; index += 1) {
        if(num[index] % 2 !== 0) {
            check.impares = resultsImpar += 1
        } else {
            check.pares = resultsPar += 1
        }
    }
    return check
}

console.log(parImpar(numerosX));


/*  Crie uma função que receba uma string word e outra string ending. Verifique se a string 
ending é o final da string word. Considere que a string ending sempre será menor que a string word. 

Valor de teste: 'trybe' e 'be'
valor esperado no retorno da função: true
Dica: Use o SPLIT. */

let word1 = 'trybe';
let word2 = 'be';
let equal = false;



function comparingWords(stringWord, stringEnding) {
    let arrayWord1 = stringWord.split('');
    let arrayWord2 = stringEnding.split('');

    if(arrayWord2.length < arrayWord1.length) {
        if(arrayWord2[arrayWord2.length -1] === arrayWord1[arrayWord1.length -1] && arrayWord2[arrayWord2.lenght -2] === arrayWord1[arrayWord1.lenght -2]){
            equal = true;
        } else {
            equal = false;
        }
    }
    return equal
    
}

console.log(comparingWords(word1, word2))