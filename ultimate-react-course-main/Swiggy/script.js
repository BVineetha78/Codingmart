const signUp = document.querySelector(".signUpSideBar");
const signUpButton = document.querySelector(".signup-click");
signUpButton.onclick = function () {
  signUp.classList.toggle(".active");
};
// JavaScript to change the text
const changingText = document.getElementById("changingText");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
  changingText.textContent = "New Text";
});
const heading = document.getElementById("heading");
heading.innerText = "Cooking gone wrong?";
console.log(heading);

{
  /* <div class="box b1">Cooking gone wrong?</div>
                  <div class="box b2">Movie marathon </div>
                  <div class="box b3">Hungry?</div>
                  <div class="box b4">Unexpected guest?</div>
                  <div class="box b5">Late night office?</div> */
}
