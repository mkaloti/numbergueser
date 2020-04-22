/*GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/
//Variables
let minNum = 1,
  maxNum = 10,
  trying = 3,
  luckNumber = 5,
  flag = false;
const input = document.querySelector("#guess-input");
const msg = document.querySelector(".message");
document.querySelector(".min-num").innerHTML = `${minNum}`;
document.querySelector(".max-num").innerHTML = `${maxNum}`;

document.querySelector("#guess-btn").addEventListener("click", showGame);

function showGame() {
  input.disabled = false;

  if (flag) {
    msg.innerHTML = "";
    window.location.reload();
    document.querySelector("#guess-btn").value = "submit";
  } else {
    trying--;
    if (parseInt(input.value) > 1 && parseInt(input.value) < 10) {
      if (trying === 0 && parseInt(input.value) !== luckNumber) {
        msg.innerHTML = "GAME OVER";
        input.value = "";
        document.querySelector("#guess-btn").value = "Play Again";
        flag = true;
        input.disabled = true;
        input.style.borderColor = "red";
        document.getElementsByTagName("body")[0].style.background = "red";
        trying = 3;
      } else if (parseInt(input.value) !== luckNumber) {
        msg.innerHTML = `Try again you have ${trying} attempts left`;
        msg.style.color = "black";
      } else if (trying === 0 && parseInt(input.value) === luckNumber) {
        trying = 3;
      } else {
        input.style.borderColor = "green";
        msg.innerHTML = " YOU WIN!";
        document.querySelector("#guess-btn").value = "Play Again";
        document.getElementsByTagName("body")[0].style.background = "green";
        trying = 3;
        flag = true;
      }
    } else {
      input.style.borderColor = "red";
      msg.innerHTML = "Enter a number in the range";
      trying++;
    }
  }
}
