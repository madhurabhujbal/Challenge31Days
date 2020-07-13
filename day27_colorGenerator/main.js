const button = document.querySelector('.generate');
const colour = document.querySelector('.colour');

button.addEventListener('click', setColour);

function setColour() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
    colour.innerText = randomColor;
}