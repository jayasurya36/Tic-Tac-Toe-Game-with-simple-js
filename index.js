const set = new Set();
set.add("123")
set.add("456")
set.add("789")
set.add("147")
set.add("258")
set.add("369")
set.add("159")
set.add("357")
let turn = "X",playerX = [], playerO = [];
document.getElementById("turns").innerText = `Player ${turn} turn`;
function checkWinner(str) {
    if (str.length === 3) {
        if (set.has(str)) {
            document.getElementById("resultHolder").innerText = `The winner is ${turn}`
        }
    }
    else if (str.length > 3 && str.length < 5) {
        let combinations = [];
        for (let i = 0; i < str.length - 2; i++) {
            combinations.push(str.substr(i, 3))
        }
        combinations.push(str[0]+str[2]+str[3]);
        combinations.push(str[0]+str[1]+str[3]);
        for (let i = 0; i < combinations.length; i++) {
            if (set.has(combinations[i])) {
                document.getElementById("resultHolder").innerText = `The winner is ${turn}`
            }
        }
    }
    else if (str.length == 5) {
        let combinations = [];
        for (let i = 0; i < str.length - 2; i++) {
            combinations.push(str.substr(i, 3))
        }
        combinations.push(str[0]+str[1]+str[3]);
        combinations.push(str[0]+str[1]+str[4]);
        combinations.push(str[1]+str[2]+str[4]);
        combinations.push(str[1]+str[3]+str[4]);
        for (let i = 0; i < combinations.length; i++) {
            if (set.has(combinations[i])) {
                document.getElementById("resultHolder").innerText = `The winner is ${turn}`
            }
        }
        document.getElementById("resultHolder").innerText = `The Game is Drawn`
    }
}

function setInnertext(val) {
    document.getElementById(val.id).innerText = turn;
    document.getElementById(val.id).onclick = false;
    if (turn == "X") {
        playerX.push(val.id.split("")[val.id.length - 1])
        checkWinner(playerX.sort().join(''))
        turn = "O"
    } else {
        playerO.push(val.id.split("")[val.id.length - 1])
        checkWinner(playerO.sort().join(''))
        turn = "X"
    }
    document.getElementById("turns").innerText = `Player ${turn} turn`;
}


function reset() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`tile${i}`).innerText = ''
        document.getElementById(`tile${i}`).onclick = true;
    }
    playerO = [];
    playerX = [];
    turn = "X";  
    document.getElementById("turns").innerText = `Player ${turn} turn`; 
    document.getElementById("resultHolder").innerText = ''
}