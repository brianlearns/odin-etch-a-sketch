const container = document.getElementById("container");
let rowInput = 16
let colInput = 16

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function hoverFormat() {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('hover-item');
        });
    });
}

makeRows(rowInput, colInput);
hoverFormat();


function deleteGrid() {
    document.querySelectorAll('.grid-item').forEach(e => e.remove());
};

function gridDims() {
    let dim = prompt('Please enter one number for length and width of grid.');

    while (dim > 100) {
        alert("You selected a number over 100! Please choose a number between 1 and 100.")
        dim = prompt();
    } 
    
    rowInput = dim;
    colInput = dim;

};


function resetGrid() {
    gridDims();
    deleteGrid();
    makeRows(rowInput, colInput);
    hoverFormat();
}


const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', resetGrid);