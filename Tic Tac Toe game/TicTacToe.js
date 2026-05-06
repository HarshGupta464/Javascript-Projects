let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg-container");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");

winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

turn = true;

const resetGame = () =>{
    turn=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach(box =>{
    box.addEventListener("click",() =>{
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        winnerCheck();
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

showWinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

winnerCheck = () =>{
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                showWinner(val1);
            }

        }
    }
}

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);