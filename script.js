const body = document.querySelector('body');
const container = document.querySelector('.container');
const gridButton = document.querySelector('#grid-btn');

let gridSize = 16;

function resizeGrid() {

    // const container = document.createElement('div');
    // container.setAttribute('class', 'container');
    // body.appendChild(container);
    

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

resizeGrid();


gridButton.addEventListener('click', () => {
    gridNumber = parseInt(prompt('Enter New Grid Size (must be =< 100 and >= 16): '));

    if (gridNumber <= 100 && gridNumber >= 16) {
        gridSize = gridNumber;
        container.innerHTML = '';
        resizeGrid()
    } else {
        alert("Invalid Grid Size!!")
    }
    

})



