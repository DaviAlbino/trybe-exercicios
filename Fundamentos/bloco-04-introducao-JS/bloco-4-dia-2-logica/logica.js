numbers = [];

for(let index = 1; index <= 10; index += 1) {
    numbers.push(index)
}


let fatorial = numbers.length;

for(let index2 = numbers.length - 1; index2 >= 1; index2 -= 1) {
    fatorial *= index2
}

console.log(fatorial)