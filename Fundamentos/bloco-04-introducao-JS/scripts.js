let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 7, 8 e 9 

let lower = [101];

for(let index = 1; index < numbers.length; index += 1) {
    if(numbers[index] < lower) {
        lower = numbers[index]
    }
}

console.log(lower)


let numbers2 = [];
for(let index2 = 1; index2 <= 25; index2 += 1) {
    numbers2.push(index2)
}

let halfNumbers = [];

for(let index3 = 0; index3 < numbers2.length; index3 += 1) {
    halfNumbers.push(numbers2[index3] / 2)
}

console.log(halfNumbers)