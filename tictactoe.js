
//MAKING FUNCTION
let boxex=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let turnO=true;//player O 
let winMsg=document.querySelector(".win");
let hideContainer=document.querySelector(".hide");
let newGame=document.querySelector(".newgame");
let drawMsg=document.querySelector(".draw");
let nooshow=document.querySelector(".noshow");
let hasWinner= false;
const winnerPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//EVENT CLICK MAIN LOGIC
boxex.forEach((allBox)=>{
    allBox.addEventListener("click",()=>{
       
        if(turnO){//player O
            allBox.innerText="O"; //console.log("O")
             turnO=false;
        }else{//player X
            allBox.innerText="X";// console.log("X")
            turnO=true;
        }
       allBox.disabled=true;
       checkWinner ();
       checkTie();
       
    })
})
// WINNER LOGIC  
const checkWinner =()=>{
    for(let positions of winnerPatterns){
            let pos1=boxex[positions [0]].innerText; // console.log(patterns[0],patterns[1],patterns[2]);
            let pos2=boxex[positions [1]].innerText;// console.log(boxex[patterns[0]],boxex[patterns[1]],boxex[patterns[2]]);
            let pos3=boxex[positions [2]].innerText;
if(pos1 !="" && pos2 !="" && pos3 !="")
            if(pos1===pos2 && pos2===pos3){  //  console.log("winner");
              showWinner(pos2);//u can use any of 3 positions
            }
    }};


const showWinner=(winner)=>{
    hasWinner=true;
    winMsg.innerText=`Cobgratulations winner is ${winner}`;
    hideContainer.classList.remove("hide");
    disableBoxex();
};
//DRAW LOGIC
const checkTie = () => {
  let allFilled = true;
  for (let box of boxex) {
    if (box.innerText === "") {
      allFilled = false;
      }}
      if (allFilled && !hasWinner) {   // No winner and board is full → it's a tie
  hideContainer.classList.add("hide");
  drawMsg.classList.remove("noshow");
  disableBoxex();
}
};  
                                                                       //BUTTONS
const enableBoxex=()=>{
    for ( let box of boxex){
       box.disabled=false;
        box.innerText="";
         turnO=true;
  hasWinner=false;
 hideContainer.classList.add("hide");
 nooshow.classList.add("noshow");
       }
}
const disableBoxex=()=>{
    for ( let box of boxex){
        box.disabled=true
    }
}
/*                                         //replaced it with enable function
const resetGame=()=>{
  turnO=true;
  hasWinner=false;
 hideContainer.classList.add("hide");
 nooshow.classList.add("noshow");
  enableBoxex();
}
  */



newGame.addEventListener("click", enableBoxex);
resetBtn.addEventListener("click",enableBoxex);


