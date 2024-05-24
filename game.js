let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

//const computerChoice=document.querySelectorAll(".computer");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=() =>{
    const options=["rock","paper","scissor"];
    const randIdx = [Math.floor(Math.random() *3) ];
    return  options[randIdx]; 
}

const computerChoice=()=>{
    if(randIdx===1){
        docume

    }
}

const drawGame=()=>  {
    msg.innerText= "Game was draw. Play Again!"; 
    msg.style.backgroundColor="#081b31"; 

}

const showWinner=(userWin,userChoiceID,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore ;
        msg.innerText= `You win! your ${userChoiceID} beats ${compChoice}`; 
        msg.style.backgroundColor="green"; 
    }
    else {
        compScore++;
        compScorePara.innerText= compScore
        msg.innerText= `You loose ${compChoice} beats your ${userChoiceID}`; 
        msg.style.backgroundColor="red"; 
    }
};

const playGame=(userChoiceID) =>{
    console.log("userChoiceId = ",userChoiceID);
    //generate computer choice

    const compChoice=genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoiceID=== compChoice){
drawGame();
    }
    else{ userWin=  true;
        if (userChoiceID ==="rock"){
            userWin=compChoice==="paper"? false:true ;
            }    
            else if (userChoiceID==="paper"){
                userWin=compChoice==="scissor" ?false :true;
        }
        else{
            userWin=compChoice=="rock"?false: true;
        }
        showWinner(userWin,userChoiceID,compChoice);
    }
};

choices.forEach((choice)=>{
   // console.dir(choice);
    choice.addEventListener("click", ()=>{
        const userChoiceID=choice.getAttribute("id");
      //  console.log("choice was clicked", userChoiceID);
        playGame(userChoiceID);
    });
});