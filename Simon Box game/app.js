let gameSeq = [];
let userSeq = [];
let btns = ["yellow" , 'red' , 'blue','green'];

let started = false;
let level = 0;
let highestScore = 0;

let allBtns = document.querySelectorAll('.btn')
let h2 = document.querySelector('h2');
let highestScoreDisplay = document.querySelector('#highest-score');

document.addEventListener('keypress',  ()=> {
    // console.log('game started')
    if(!started){                              //step-1
        console.log('game is started');
        started = true;
        levelUp();
    }
});                                                 

function gameFlash(btn){
    btn.classList.add('flash')                  // step-2 flash 
    setTimeout(function () {
        btn.classList.remove('flash')
    } , 200);
};

function userFlash(btn){
    btn.classList.add('userFlash')                  // step-2 userflash 
    setTimeout(function () {
        btn.classList.remove('userFlash')
    } , 250);
};


// console.dir(h2.innerText)
function levelUp() { 
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;                                       //step -2 levelup

    //random btn choose                               
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    // console.log(randBtn)
    // console.log(randColor)
    // console.log(randIdx)
   
};

for ( btn of allBtns ) {
    btn.addEventListener('click' , btnPress)   //loop
}

function checkAns(idx) {                                       // to the match the answer 
    //  console.log(`current level : ${level}`)
    // let idx = level - 1 ;
    if (userSeq[idx] === gameSeq[idx]){
       if (userSeq.length == gameSeq.length) {
       setTimeout( levelUp , 500)
       }
    } else {
        //keeps the highest score
        if (level > highestScore) {
            highestScore = level;
            highestScoreDisplay.innerText = `Highest Score: ${highestScore}`;
        }
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press Any Key To Start.`;   
        document.body.style.backgroundColor = 'red'
        setTimeout ( function() {
        document.body.style.backgroundColor = 'white'
        },200)
        reset();
    }
};

function reset() {
    started =false;
    gameSeq = [];
    userSeq =[];
    level = 0; 
}


function btnPress() {
    // console.log('btn was pressed');
    // console.log(this)
    let btn = this ; 
    userFlash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor)
    // console.log(userColor)
    
    checkAns(userSeq.length-1);
};