const board = document.querySelector('#board');
const colors = ['#00A170', '#A0DAA9', '#56C6A9', '#006B54', '#616247', '#264E36','#797B3A', '#00A591',
 '#BFD641', '#006E6D', '#EAE6DA', '#D1B894', '#6F9FD8', '#6B5B95'];
const SQUARES_NUMBER = 800;

for ( let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.background = '#151416';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
