let GameSeq=[];
let userSeq=[];

let btns=["yellow", "red", "purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started==false) {
        console.log("game started");
        started=true;
        
        levelUp();
    }
});
 
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
userSeq=[];
level++; 
h2.innerText=`Level ${level}`;

let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
GameSeq.push(randColor);
console.log(GameSeq); 
gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("current level : ", level);
    if(userSeq[idx]=== GameSeq[idx]){
        if(userSeq.length==GameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}<b><br>Press any Key to start Again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    GameSeq = [];
    userSeq = [];
    level = 0;
}
