let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscoree=document.querySelector("#userscore");
let compscore=document.querySelector("#compscore");
// 0------------------------------
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
});
// ''''''------------------------------

const playgame=(userchoice)=>{
   const compchoice=genCompChoice();
   if(userchoice===compchoice){
    draw();
   }else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        userwin=compchoice==="scissor"?false:true;
    }else{
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,userchoice,compchoice);
   }
}

// ---------------------------------------------

const genCompChoice=()=>{
    let choices=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return choices[randomidx];
}
// ---------------------------------------
const draw=()=>{
    msg.innerText="OOPS! Game was Draw";
    msg.style.backgroundColor="yellow";
    
}
// ---------------------------------------------
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`You Win! Your ${userchoice} beats Computers ${compchoice}`
        msg.style.backgroundColor="green";
        userscore+=1;
        userscoree.innerText=userscore;
    }else{
        msg.innerText=`Computer Won! Computer ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
        computerscore+=1;
        compscore.innerText=computerscore;
    }
}
