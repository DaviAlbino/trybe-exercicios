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