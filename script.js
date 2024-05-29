console.log("Welcome to Tic Tac Toe");


let audioTurn = new Audio("gameover1.mp3");
let turn1 = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
  return turn1 === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  wins.forEach(e => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[0]].innerText !== "")) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document.querySelector('.imageBox').getElementsByTagName('img')[0].style.display = "block";
    }
  });
}

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext'); // Corrected the query selector
  element.addEventListener('click', () => {
    if (boxtext.innerText === '' && !isgameover) { // Check for empty string and if game is not over
      boxtext.innerText = turn1;
      checkWin();
      if (!isgameover) {  // Updated to use isgameover
        turn1 = changeTurn(); // Update turn1
        audioTurn.play();
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn1; // Add space
      }
    }
  });
});

// /add onClickListener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
  element.innerText=""



    });
   

    turn1 = "X"; // Reset turn to X
    isgameover = false; // Reset game over state
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn1;
    document.querySelector('.imageBox').getElementsByTagName('img')[0].style.display = "none"; // Hide the image
  });