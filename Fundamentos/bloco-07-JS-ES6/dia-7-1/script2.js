const button = document.getElementById('btn-counter');
const h1 = document.getElementById('counter-screen');
let clickCount = 0;

button.addEventListener('click', () => {
    h1.innerText = clickCount += 1; 
})