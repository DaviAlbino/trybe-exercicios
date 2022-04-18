let h1 = document.createElement('h1');
h1.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body"
document.body.appendChild(h1)

let mainContent = document.createElement('main');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

let centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

let paragraph = document.createElement('p');
paragraph.innerHTML = "Estou feliz em conseguir realizar estes exercícios.";
centerContent.appendChild(paragraph);

let leftSection = document.createElement('section');
leftSection.className = 'left-content';
mainContent.appendChild(leftSection);

let rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainContent.appendChild(rightSection);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftSection.appendChild(image);



let uList = document.createElement('ul');
rightSection.appendChild(uList);

let numbers = ['Um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for(let index = 0; index < numbers.length; index += 1){
    let listItems = document.createElement('li');
    listItems.innerText = numbers[index];
    uList.appendChild(listItems);
}

let hThree = ['Quero muito ser programador FULLSTACK', 'Espero uma dia conseguir isso', 'A Trybe já está me ajudando a trilhar esse caminho']
for(let index = 0; index = hThree.length; index += 1){
    let titles = document.createElement('h3');
    titles.innerText = hThree[index];
}
