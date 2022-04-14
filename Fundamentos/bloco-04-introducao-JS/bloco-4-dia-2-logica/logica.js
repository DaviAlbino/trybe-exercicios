//exercício 1

numbers = [];

for(let index = 1; index <= 10; index += 1) {
    numbers.push(index)
}


let fatorial = numbers.length;

for(let index2 = numbers.length - 1; index2 >= 1; index2 -= 1) {
    fatorial *= index2
}

console.log(fatorial)

// exercício 2

let word = 'Aleluia';

let reverseWord = '';

for(let index = word.length -1; index >= 0; index -= 1) {
    reverseWord += word[index];
}
console.log(reverseWord);

// exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let words = [];
for(index = 0; index < array.length; index += 1) {
     words.push(array[index].length)
}

console.log(words)

let bigger = [0];

for(let index3 = 1; index3 < words.length; index3 += 1) {
    if(words[index3] > bigger){
        bigger = words[index3]
    }
}

console.log('Maior número é: ' + bigger)

// exercício 4

let numeros = [];
for(let index = 0; index <= 50; index += 1){
    numeros.push(index)
}

let primeNumber = [];
let notPrime = [];

for(let index2 = 2; index2 < numeros.length; index2 += 1){
    for(let index3 = 2; index3 < numeros.length; index3 += 1) {
        if(numeros[index2] % numeros[index3] == 0 && numeros[index2] !== numeros[index3]) {
            notPrime.push(numeros[index2])
            } else {
                primeNumber.push(numeros[index2]);
        }
        
    }
}

console.log(notPrime)

console.log(primeNumber)
