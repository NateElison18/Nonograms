// keyArray = array size of 2: 
//      an array of the top key and one of the side:
//          both arrays size 15 (12, 10, or 5) of arrays for each column or row 

const exampleKeyArray = [
    [ //Top key (columns):
        [2], [1, 1], [1, 1], [1, 1], [1, 1], 
        [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], 
        [1, 1], [1, 1], [1, 1], [1, 1], [2] 
    ],
    [ //Side key (rows):
    
        [15], [1, 1], [0], [0], [0], 
        [0], [0], [0], [0], [0], 
        [0], [0], [0], [0], [13] 
    ],
    'Example Puzzle',
    15
];

const inputArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let inputMode = 1; // 0 = crossout, 1 = fill
let boardSize = exampleKeyArray[3];
let correctCount = 0;
const boardType = document.querySelector('body').getAttribute('id');

if(boardType === 'puzzle')
    buildKeys(boardSize, exampleKeyArray);
else 
    addDrawEventListeners();

buildBoard(boardSize);
addEventListeners();

function buildPixel(xCoordinate, yCoordinate) {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.setAttribute('mode', 'empty');
    pixel.setAttribute('x', xCoordinate);
    pixel.setAttribute('y', yCoordinate);

    pixel.addEventListener('mousedown', () => {
        pixelAction(pixel);
    });
    pixel.addEventListener("mouseover", event => {
        if (event.buttons == 1) pixelAction(pixel);
      });

    return pixel;
}

function buildRow(length, yCoordinate) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    for(let i = 0; i < length; i++) {
        const pixel = buildPixel(i, yCoordinate);
        row.appendChild(pixel);
    }

    return row;
}

function buildBoard(size, keyArray) {
    const board = document.querySelector('#centerBoard');

    for(let i = 0; i < size; i++) {
        const row = buildRow(size, i);
        board.appendChild(row);
    }

}

function buildKeys(size, key) {
    const topKey = document.querySelector('#topKey');
    const sideKey = document.querySelector('#sideKey');

    for(let i = 0; i < size; i++) {
        const row = buildKeyRow(key[1][i]);
        const column = buildKeyRow(key[0][i]);

        if(row.getAttribute('zero')) {
            row.setAttribute('class', 'completedRow');
            correctCount++;
        } else
            row.setAttribute('class', 'numberRow');

        if(column.getAttribute('zero')) {
            column.setAttribute('class', 'completedRow');
            correctCount++;
            console.log('found zero attribute');
        } else {
            column.setAttribute('class', 'numberColumn');
        }

        console.log(row.getAttribute('zero'));
        
        row.setAttribute('id', 'row' + i);
        column.setAttribute('id', 'column' + i);

        sideKey.appendChild(row);
        topKey.appendChild(column);    
    }
}

function buildKeyRow(key) {
    const row = document.createElement('div');
    for(let i = 0; i < key.length; i++) {
        const number = buildNumber(key[i]);
        row.appendChild(number);
        console.log(number.textContent);
        if(number.textContent == 0)
            row.setAttribute('zero', 'true');
    }
    return row;
}

function buildNumber(key) {

    const number = document.createElement('div');
    number.setAttribute('class', 'number');
    number.textContent = key;
    return number;
}

function addEventListeners() {
    const solidBtn = document.querySelector('#solid');
    const crossBtn = document.querySelector('#cross');

    solidBtn.addEventListener('click', () => {
        solidBtnAction();
    });

    crossBtn.addEventListener('click', () => {
        crossBtnAction();
    });
}

function solidBtnAction() {
    if(inputMode === 1) 
        return
    const solidCheck = document.querySelector('#solidCheck');
    const crossCheck = document.querySelector('#crossCheck');

    solidCheck.setAttribute('style', 'visibility: visible');
    crossCheck.setAttribute('style', 'visibility: hidden');

    inputMode = 1;

}

function crossBtnAction() {
    if(inputMode === 0) 
        return
    const solidCheck = document.querySelector('#solidCheck');
    const crossCheck = document.querySelector('#crossCheck');

    solidCheck.setAttribute('style', 'visibility: hidden');
    crossCheck.setAttribute('style', 'visibility: visible');

    inputMode = 0;

}

function pixelAction(pixel) {
    let pixelMode = pixel.getAttribute('mode');
    switch (pixelMode) {
        case 'empty':
            if(inputMode)
                fillPixel(pixel);
            else
                crossOutPixel(pixel);
            break;
        case 'filled':
            if(inputMode)
                erasePixel(pixel);
            break;
        case 'crossed':
            if(!inputMode)
                erasePixel(pixel);
            break;
    }
    if(inputMode && boardType)
        checkAnswer(pixel.getAttribute('x'), pixel.getAttribute('y'));
}

function fillPixel(pixel) {
    let x = pixel.getAttribute('x');
    let y = pixel.getAttribute('y');

    pixel.setAttribute('class', 'filledPixel');
    pixel.setAttribute('mode', 'filled');

    inputArray[y][x] = 1;

}

function crossOutPixel(pixel) {
    pixel.setAttribute('class', 'crossedPixel');
    pixel.setAttribute('mode', 'crossed');
}

function erasePixel(pixel) {
    let x = pixel.getAttribute('x');
    let y = pixel.getAttribute('y');

    pixel.setAttribute('class', 'pixel');
    pixel.setAttribute('mode', 'empty');

    inputArray[y][x] = 0;

}

function checkAnswer(xCoordinate, yCoordinate) {
    const correctColumn = document.querySelector('#column' + xCoordinate);
    const correctRow = document.querySelector('#row' + yCoordinate);

    if(checkColumn(xCoordinate)) {
        correctColumn.setAttribute('class', 'completedColumn');
        correctCount++;
    } else if(correctColumn.getAttribute('class') === 'completedColumn') {
        correctColumn.setAttribute('class', 'numberColumn');
        correctCount--;
    }
    if(checkRow(yCoordinate)) {
        correctRow.setAttribute('class', 'completedRow');
        correctCount++;
    } else if(correctRow.getAttribute('class') === 'completedRow') {
        correctRow.setAttribute('class', 'numberRow');
        correctCount--;
    }

    console.log(correctCount);

    if(correctCount === boardSize * 2) {
        endGame();
    }



}

function checkColumn(column) {
    const givenAnswer = countColumnPixels(column).toString();
    const keyAnswer = exampleKeyArray[0][column].toString();
    return (givenAnswer === keyAnswer);

}

function checkRow(row) {
    const givenAnswer = countRowPixels(row).toString();
    const keyAnswer = exampleKeyArray[1][row].toString();
    return (givenAnswer === keyAnswer);
}

function countColumnPixels(column) {
    let number = 0;
    let columnAnswer = [];
    for (let i = 0; i < boardSize; i++) {
        if(!inputArray[i][column] && number > 0){
            columnAnswer.push(number);
            number = 0;
        } else if (inputArray[i][column]){
            number++;
        }
    }
    
    if(!columnAnswer.length || number)
        columnAnswer.push(number)

    return columnAnswer;
}

function countRowPixels(row) {
    let number = 0;
    let rowAnswer = [];
    for (let i = 0; i < boardSize; i++) {
        if(!inputArray[row][i] && number > 0){
            rowAnswer.push(number);
            number = 0;
        } else if (inputArray[row][i]){
            number++;
        }
    }
    
    if(!rowAnswer.length || number)
    rowAnswer.push(number)

    return rowAnswer;
}

function endGame() {
    const topKeys = document.querySelectorAll('.completedColumn');
    const sideKey = document.querySelector('#sideKey');
    const options = document.querySelector('#options');
    const endGameDiv = document.querySelector('#endGameDiv');
    const puzzleName = document.querySelector('#puzzleName');

    const topKeysArray = Array.from(topKeys);

    topKeysArray.forEach(element => {
        element.setAttribute('class', 'hiddenColumn');
    });
    sideKey.setAttribute('class', 'hidden');
    options.setAttribute('class', 'hidden');

    setTimeout(() => {
        endGameDiv.setAttribute('id', 'visibleEndGame');
        puzzleName.textContent = exampleKeyArray[2];
    }, 1000);


}

// Draw Puzzle Functions:

function addDrawEventListeners() {
    const radioButtons = document.querySelectorAll('.radioBtn');
    // const radioButtonsArray = Array.from(radioButtons);

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('change', (event) => {
            eraseBoard();
            boardSize = event.target.value;
            console.log(boardSize);
            buildBoard(boardSize);
            console.log('Trying to change the board');
        })
    });
}

function eraseBoard() {
    const centerBoard = document.querySelector('#centerBoard');
    while(centerBoard.firstChild){
        centerBoard.removeChild(centerBoard.lastChild);
    }
    }





