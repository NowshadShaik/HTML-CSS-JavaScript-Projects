



window.onload = () => {
    generateBoard();
}

function generateBoard() {
    console.log("Generating a fresh board.");

    const board = document.getElementById("game");
    board.innerHTML = "";

    for(let i=1; i<=9; i++) {
        let newRow = document.createElement("tr");

        for(let j=1;j<=9;j++) {
            let newCell = document.createElement("td");
            newCell.textContent = j;

            newRow.appendChild(newCell);
        }

        board.appendChild(newRow);
    }
}