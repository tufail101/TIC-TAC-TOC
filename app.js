let btn = document.querySelectorAll(".btn");
let btn2=document.body.getElementsByClassName(".reset_0")

let btn3=document.body.getElementsByClassName(".test")[0]
let turn0 = true;
const winnerpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn0) {
      btn.innerText = "O";
      turn0 = false;
    } else {
      btn.innerText = "X";
      turn0 = true;
    }
    btn.disabled = true;
    checkwinner();
  });
});
const checkwinner = () => {
  for (let pattern of winnerpattern) {
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        document.write("you are winner"," ", pos1," " );
      }
    }
  }
};
/* let reset=()=>{
   window.location.reload();
 } */
btn2.addEventListener('click',()=>{
   window.location.reload();
})
