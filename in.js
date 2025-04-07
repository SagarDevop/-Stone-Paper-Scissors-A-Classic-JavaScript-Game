let userScore =0;
let compScore = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");
let userscoreboard = document.querySelector("#userscore")
let compchoiceboard = document.querySelector("#compscore")

const genCompChoice =()=>{
    const options =["rock","paper","scissors"];
    const randomindx =Math.floor(Math.random()*3);
    return options[randomindx];
}
let playGame =(userchoice)=>{
    console.log("userchoice",userchoice);
    const CompChoice = genCompChoice();
    console.log("compchoice",CompChoice);
    if(userchoice === CompChoice)
        drawGame();
    else{
 let userWin =true;
 if(userchoice === "rock"){
    userWin = CompChoice === "paper" ? false : true ;
 }else if(userchoice === "paper"){
    userWin = CompChoice === "scissors" ? false : true;
 }else{
    userWin = CompChoice === "rock" ?false : true;
 }
 showWinner(userWin);
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})
 drawGame=()=>{
    console.log("game was draw")
     msg.innerText ="draw hai lala"
     msg.style.backgroundColor = "yellow"
      msg.style.color ="grey"
 }
 showWinner =( userWin) =>{
    if (userWin ){
        userScore++;
        userscoreboard.innerText = userScore;
        msg.innerText =`You win `
        console.log("user win" )
        msg.style.backgroundColor = "green"
        msg.style.color ="yellow"
    }
    else{
        compScore++;
        compchoiceboard.innerText = compScore;
        console.log("computer win")
         msg.innerText =`you loose  `
         msg.style.backgroundColor = "red"
          msg.style.color ="white"
        }
    }

