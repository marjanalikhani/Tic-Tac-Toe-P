const game = document.querySelector(".game");
// const boxes=Array.from(document.querySelectorAll(".game"));
const boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes);

const btn = document.querySelector(".restart");
const playerTxt = document.querySelector('.text');
const cells = ["", "", "", "", "", "", "", "", ""];
const oText = "O";
const xText = "X";

let currentPlayer = oText;

let used_boxes = 0;

//------------------------------Number of Click------------------------------

const clickBoard = function () {
  boxes.forEach((box, index) => {

    box.addEventListener("click", boxClick);

  });
};

//------------------------------- Box Click-------------------------------

function boxClick(e) {

  const id = e.target.id;


  if (!cells[id]) {

    cells[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    used_boxes++;
    console.log(used_boxes)

    if (playerWin(currentPlayer)) {
      playerTxt.innerHTML = `${currentPlayer} Wins`;
      stopGame();
      return;
    }
    if (currentPlayer === oText) {
      currentPlayer = xText;
      playerTxt.innerHTML = `X Turn`;
  
    }
    else {
      currentPlayer = oText;
      playerTxt.innerHTML = `O Turn`;
    }
  }

  
if(used_boxes==9){
  console.log("hello")
  playerTxt.innerHTML = `Draw`;

}

}

//------------------------------Stop Game------------------------------


function stopGame() {

  if (playerTxt.innerHTML == `X Wins` || playerTxt.innerHTML == `O Wins`)

    stopClick();

}

//------------------------------Stop Click------------------------------


const stopClick = function () {

  boxes.forEach((box, index) => {

    box.removeEventListener("click", boxClick);

  });

};

//------------------------------Playerr win------------------------------

const playerWin = (player) => {

  if (cells[0] === player) {

    if (cells[1] === player && cells[2] === player) {
      return true;
    }

    if (cells[3] === player && cells[6] === player) {
      return true;
    }

    if (cells[4] === player && cells[8] === player) {
      return true;
    }

  }

  //-----------------------------------------------------------------------------------


  if (cells[8] === player) {


    if (cells[2] === player && cells[5] === player) {
      return true;
    }

    if (cells[7] === player && cells[6] === player) {
      return true;
    }

  }

  //-----------------------------------------------------------------------------------

  if (cells[4] === player) {


    if (cells[3] === player && cells[5] === player) {
      return true;
    }

    if (cells[1] === player && cells[7] === player) {
      return true;
    }

    if (cells[2] === player && cells[6] === player) {
      return true;
    }


  }

};

//---------------------------------Click restartbutton---------------------------------

function restart() {
  btn.addEventListener("click", () => {
    used_boxes = 0;
    clickBoard();

    cells.forEach((cell, index) => {
      cells[index] = "";
    });

    boxes.forEach((box) => {
      box.innerText = "";
    });

    playerTxt.innerHTML = `Play the Game!`;

    currentPlayer = oText;


  });

}

clickBoard();

restart();



