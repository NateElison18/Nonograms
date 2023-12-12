// keyArray = array size of 2: 
//      an array of the top key and one of the side:
//          both arrays size 15 (or 12) of arrays for each column or row 

const exampleKeyArray = [
    [ //Top key (columns):
        [2, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [2, 1] 
    ],
    [ //Side key (rows):
    
        [15], [1, 1], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [15] 
    ]
];
let inputMode = 1; // 0 = crossout, 1 = select

buildKeys(15, exampleKeyArray);
buildBoard(15);
addEventListeners();

function buildPixel() {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.setAttribute('mode', 'empty');

    pixel.addEventListener('mousedown', () => {
        pixelAction(pixel);
    });
    pixel.addEventListener("mouseover", event => {
        if (event.buttons == 1) pixelAction(pixel);
      });

    return pixel;
}

function buildRow(length) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    for(let i = 0; i < length; i++) {
        const pixel = buildPixel();
        row.appendChild(pixel);
    }

    return row;
}

function buildBoard(size, keyArray) {
    const board = document.querySelector('#centerBoard');

    for(let i = 0; i < size; i++) {
        const row = buildRow(size);
        board.appendChild(row);
    }

}

function buildKeys(size, key) {
    const topKey = document.querySelector('#topKey');
    const sideKey = document.querySelector('#sideKey');

    for(let i = 0; i < size; i++) {
        const row = buildKeyRow(size, key[1][i]);
        const column = buildKeyRow(size, key[0][i]);

        row.setAttribute('class', 'numberRow');
        column.setAttribute('class', 'numberColumn');

        sideKey.appendChild(row);
        topKey.appendChild(column);
    
    }

}

function buildKeyRow(size, key) {
    const row = document.createElement('div');
    for(let i = 0; i < key.length; i++) {
        const number = buildNumber(key[i]);
        row.appendChild(number);
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
    // TODO: Fix this to listen for mode and if its been selected or not
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



}

function fillPixel(pixel) {
    pixel.setAttribute('class', 'filledPixel');
    pixel.setAttribute('mode', 'filled');

}

function crossOutPixel(pixel) {
    pixel.setAttribute('class', 'crossedPixel');
    pixel.setAttribute('mode', 'crossed');
}

function erasePixel(pixel) {
    pixel.setAttribute('class', 'pixel');
    pixel.setAttribute('mode', 'empty');

}



