buildBoard(15);

function buildPixel() {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');

    pixel.addEventListener('click', () => {
        // TODO: Fix this to listen for mode and if its been selected or not
        pixel.setAttribute('style', 'background-color: black');

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
buildKeys(15, exampleKeyArray);


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

function buildKeyColumn() {
    
}

function buildNumber(key) {

    const number = document.createElement('div');
    number.setAttribute('class', 'number');
    number.textContent = key;
    console.log(key);
    return number;
}

