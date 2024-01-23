(function () {
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
        localStorage.setItem('difficulty', 'easy')
        window.location.href = 'pages/puzzle.html';
    });
    medium.addEventListener('click', () => {
        localStorage.setItem('difficulty', 'medium')
        window.location.href = 'pages/puzzle.html';
    });
    hard.addEventListener('click', () => {
        localStorage.setItem('difficulty', 'hard')
        window.location.href = 'pages/puzzle.html';
    });
    drawPuzzle.addEventListener('click', () => {
        window.location.href = 'pages/draw-puzzle.html';
    });

    if(!localStorage.getItem('puzzles')) {
        addPuzzles();
        console.log('adding puzzles');
    }

    if(!localStorage.getItem('stats')) {
        addStats();
    }
})()

function addPuzzles() {
    const puzzles = {
        easy: [],
        medium: [],
        hard: []
    };
    const easy = buildEasyPuzzles();
    const medium = buildMediumPuzzles();
    const hard = buildHardPuzzles();

    puzzles.easy = easy;
    puzzles.medium = medium;
    puzzles.hard = hard;

    let puzzlesString = JSON.stringify(puzzles);
    localStorage.setItem('puzzles', puzzlesString);
}

function buildEasyPuzzles() {
    const puzzles = [];
    puzzles.push([
        [ //Top key (columns):
            [1,1],[4],[1],[5],[1]
        ],
        [ //Side key (rows):
            [5],[1,1],[1,1],[1,1],[1,1] 
        ],
        'Pi', // puzzle name
        5, // puzzle size
        'easy' // puzzle difficulty
    ]);

    puzzles.push([
        [ //Top key (columns):
            [2],[6,1],[12],[8],[4],
            [3],[3],[3],[4],[4,1],[4],[3]
        ],
        [ //Side key (rows):
            [1],[3],[4],[3],[8],[9],
            [10],[3,3],[2,2],[2,2],
            [1,1,1],[2,1]
        ],
        'Dog', // puzzle name
        12, // puzzle size
        'easy' // puzzle difficulty
    ]);

    puzzles.push([
        [ //Top key (columns):
            [0],[1],[1,3],[6],[9],
            [4,1,3],[8],[5],[1,3],[1]
        ],
        [ //Side key (rows):
            [1],[3],[3],[5],[3,3],
            [5],[3,3],[9],[5,1],[2]
        ],
        'Christmas Tree', // puzzle name
        10, // puzzle size
        'easy' // puzzle difficulty
    ]);
    return puzzles;
}

function buildMediumPuzzles() {
    const puzzles = [];
    puzzles.push([
        [ //Top key (columns):
            [3, 3, 3], [2, 7, 2], [1, 9, 1], [11], [3, 3], 
            [3, 3, 3], [3, 5, 3], [3, 5, 3], [3, 5, 3], [3, 3, 3], 
            [3, 3], [11], [1, 9, 1], [2, 7, 2], [3, 3, 3] 
        ],
        [ //Side key (rows):
        
            [3, 3], [2, 5, 2], [1, 9, 1], [11], [4, 4], 
            [3, 3, 3], [4, 5, 4], [4, 5, 4], [4, 5, 4], [3, 3, 3], 
            [4, 4], [11], [1, 9, 1], [2, 5, 2], [3, 3] 
        ],
        'Target', // puzzle name
        15, // puzzle size
        'medium' // puzzle difficulty
    ]);

    puzzles.push([
        [ //Top key (columns):
            [5,1],[2,6,1],[1,9],[2,1,3],
            [2,5,2],[1,6,2],[2,1,3],[2,8],
            [1,7,1],[5,1],[1,1,1],[3,1]
        ],
        [ //Side key (rows):
            [1,1,1],[1,1,1],[1,1,1],[1,1,1],
            [10],[12],[3,2,3,1],[12],[3,2,3],
            [3,3],[6],[12]
        ],
        'Smiling Coffee mug', // puzzle name
        12, // puzzle size
        'medium' // puzzle difficulty
    ]);

    puzzles.push([
        [ //Top key (columns):
            [1],[1],[2],[3],[4],[8],
            [1,6,1],[1,9],[1,6,1],[6],[2,1],[1]
        ],
        [ //Side key (rows):
            [5],[3],[1],[4],[5],[6],[5,1],
            [6],[6],[2,1,1],[2,1,1],[1,4]
        ],
        'Dino', // puzzle name
        12, // puzzle size
        'medium' // puzzle difficulty
    ]);

    return puzzles;
}

function buildHardPuzzles() {
    const puzzles = [];
    puzzles.push([
        [ //Top key (columns):
            [6],[2,2],[1,2,2],[1,5],
            [1,4],[4],[6],[8],[5,2],
            [7],[5],[5],[5],[2,1],[2]

        ],
        [ //Side key (rows):
            [4],[2],[1],[1],[1],[1],
            [2],[9],[9],[9],[12],[2,9],
            [1,2,4],[3,3],[2,1]
        ],
        'Plesiosaurus', // puzzle name
        15, // puzzle size
        'hard' // puzzle difficulty
    ]);

    puzzles.push([
        [ //Top key (columns):
            [4],[5],[7],[6],[6],
            [6],[9],[7,1],[7,1],
            [11],[9,1],[8,1],[8],[8],[3]

        ],
        [ //Side key (rows):
            [2],[3],[1,4],[2,4],
            [4,5],[14],[14],[14],
            [11],[9],[7],[5],[1,1],[4],[3]
        ],
        'Chicken', // puzzle name
        15, // puzzle size
        'hard' // puzzle difficulty
    ]);

    puzzles.push([
        [ //Top key (columns):
            [1,1],[4,1,1],[6,1,1,2],[2,3,2,2,1],
            [6,2,3],[2,10],[14],[4,8],[8],[3,4],
            [2,1,1,1],[1,1,2],[2,3],[2,2],[2]

        ],
        [ //Side key (rows):
            [1,1],[4,1,1],[6,1,1,2],[2,3,2,2,1],
            [6,2,3],[2,10],[14],[4,8],[8],[3,4],
            [2,1,1,1],[1,1,2],[2,3],[2,2],[2]
        ],
        'Bug', // puzzle name
        15, // puzzle size
        'hard' // puzzle difficulty
    ]);
    return puzzles;
}

function addStats() {
    const stats = {
        puzzlesCompleted: 0,
        puzzlesStarted: 0,
        puzzlesDrawn: 0
    };

    let statsString = JSON.stringify(stats);
    localStorage.setItem('stats', statsString);
}