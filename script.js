let boxes=document.querySelectorAll(".box"); //creating a boxes variables to acess btns
let reset_btn=document.querySelector(".reset_button"); //creating a reset btn 
let new_game=document.querySelector(".start_again");
let message_cont=document.querySelector(".msg_cont");
let message=document.querySelector(".msg");
let turn0 = true;//two players X,O
const win_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const restart_game=() => {
    turn0=true;
    enable_boxes();
    message_cont.classList.add("hide");
}
const disbled_boxes=() => {
    for(let box of boxes){
        box.disabled=true;
    };
};
const enable_boxes=() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};
boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false; // Use boolean value false
        } else {
            box.innerText = "X";
            turn0 = true; // Use boolean value true
        }
        box.disabled = true;
        checkWinner();
    });
});
const showWinner=(winner) => {
    message.innerText=`Congratulation Winner is ${winner}`;
    message_cont.classList.remove("hide");
    disbled_boxes();
};
const checkWinner = () => {
    for (let pattern of win_pattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if ( pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val)
                showWinner(pos1Val);
            };
        };
    };
};
new_game.addEventListener("click",restart_game);
reset_btn.addEventListener("click",restart_game);