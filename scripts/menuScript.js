addEventListeners();

function addEventListeners() {
    const learnToPlay = document.querySelector('#howToPlay');
    const easy = document.querySelector('#easy');
    const medium = document.querySelector('#medium');
    const hard = document.querySelector('#hard');
    const drawPuzzle = document.querySelector('#drawPuzzle');

    learnToPlay.addEventListener('click', () => {
        window.open('https://en.wikipedia.org/wiki/Nonogram', '_blank');
    });

    // TODO change these to update the puzzle to be displayed on the page
    easy.addEventListener('click', () => {
        window.location.href = '../pages/puzzle.html';
    });
    medium.addEventListener('click', () => {
        window.location.href = '../pages/puzzle.html';
    });
    hard.addEventListener('click', () => {
        window.location.href = '../pages/puzzle.html';
    });

    drawPuzzle.addEventListener('click', () => {
        window.location.href = '../pages/draw-puzzle.html';
    });
}