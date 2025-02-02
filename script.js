const body = document.querySelector('body');
const gameScreen = document.querySelector('#video-game');
const container = document.querySelector('.container');
const gridButton = document.querySelector('#grid-btn');
const clearButton = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const randomColor = document.querySelector('#random-colors');

note = document.createElement('div')
note.style.backgroundColor = 'lightpink'
body.appendChild(note);

let gridSize = 16;


function resizeGrid() {

    for(let i = 0; i < gridSize; i++) {

        const rowContainer = document.createElement('div');
        rowContainer.setAttribute('class','row-container')
        container.appendChild(rowContainer);

        for(let i = 0; i < gridSize; i++) {
            const square = document.createElement('div');
            square.setAttribute('class','square')
            rowContainer.appendChild(square);
        } 
        
    }

}

function squareBackColor(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
        });
    });
}

resizeGrid();
squareBackColor();

function randomColorGenerate(){
    return Math.floor(Math.random() * 255);
}

randomColor.addEventListener('click',squareBackColor = () => {
    eraser.style.backgroundColor = 'white';
    randomColor.style.backgroundColor = 'lightblue';
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = `rgb(${randomColorGenerate()}, ${randomColorGenerate()}, ${randomColorGenerate()})`
        });
    });
    note.innerText = 'Note: Double click on random color button to disable it.'
} )


gridButton.addEventListener('click', () => {
    gridNumber = parseInt(prompt('Enter New Grid Size (must be =< 100 and >= 16): '));

    if (gridNumber <= 100 && gridNumber >= 16) {
        gridSize = gridNumber;
        container.innerHTML = '';
        resizeGrid()
        squareBackColor();
    } else {
        alert("Invalid Grid Size!!")
    }
    

})

clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
})

eraser.addEventListener('click',squareBackColor = () => {
    randomColor.style.backgroundColor = 'white'
    eraser.style.backgroundColor = 'yellow';
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'white';
        });
    });
    note.innerText = 'Note: Double click on eraser button to disable it.'
} )

eraser.addEventListener('dblclick',squareBackColor = () => {
    eraser.style.backgroundColor = 'white'
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
        });
    });
    note.innerText = ''
} )

randomColor.addEventListener('dblclick',squareBackColor = () => {
    randomColor.style.backgroundColor = 'white'
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
        });
    });
    note.innerText = ''
} )
