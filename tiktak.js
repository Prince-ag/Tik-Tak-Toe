let btn = document.querySelectorAll(".box");
let res = document.querySelector(".reset");
let newgame = document.querySelector("#newgame");
let msgC = document.querySelector(".message");
let msg = document.querySelector("#winner");
let turnO = true;
let count = 0;
let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkwinner();
    });
});

const disablebtn = () => {
    for (let boxes of btn) {
        boxes.disabled = true;
    }
}

const enablebtn = () => {
    for (let boxes of btn) {
        boxes.disabled = false;
        boxes.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgC.classList.remove("hidden");
    disablebtn();
}

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
};

const resetgame = () => {
    turnO = true;
    count = 0;
    enablebtn();
    msgC.classList.add("hidden");
};

newgame.addEventListener("click", resetgame);
res.addEventListener("click", resetgame);
