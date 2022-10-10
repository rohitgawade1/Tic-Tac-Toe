let music = new Audio('music.mp3');
let turnAudio = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let boxes = document.getElementsByClassName('box');
let heading4 = document.querySelector('.heading4');
let reset = document.querySelector('.reset');
let boxText = document.getElementsByClassName('boxtext');
let turn = 'X';
let isGameOver = false;

const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}   


const checkwin = () => {
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
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== '')){
                document.getElementsByClassName('heading4')[0].innerText = boxText[e[1]].innerText + " Won";  
                isGameOver = true;  
        }
        
    })
}

// Game logic
for (const element of boxes) {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxText.innerHTML === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkwin();
            if(!isGameOver) {
                heading4.innerHTML = 'Turn for ' + turn;
            }
            
        }
    })
}

// Reset game
reset.addEventListener(('click') ,()=>{
    for (const ele of boxText) {
        ele .innerHTML = ""
    }
    turn = 'X';
    heading4.innerHTML = 'Turn for ' + turn;
})