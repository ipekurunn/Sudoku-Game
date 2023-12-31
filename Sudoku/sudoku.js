var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    //Board 9x9
    for (let j = 0; j < 9; j++){
        for(let k = 0; k < 9; k++){
            let tile = document.createElement("div");
            tile.id = j.toString() + "-" + k.toString();

            if(board[j][k] != "-") {
                tile.innerText = board[j][k];
                tile.classList.add("tile-start")
            }
            
            if(j == 2 || j == 5){
                tile.classList.add("horizontal-line");
            }

            if(k == 2 || k == 5){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}


function selectTile() {
    if (numSelected){
        if (this.innerText != "") {
            return;
        }

        //'0-0' '0-1' ... '3-1'
        let coords = this.id.split("-"); //["0", "0"]
        let j = parseInt(coords[0]);
        let k = parseInt(coords[1]);

        if (solution[j][k] == numSelected.id) {
            this.innerText = numSelected.id;
        } 
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}

function addedNumber() {
    cell.classList.add('added-number');
    
}
