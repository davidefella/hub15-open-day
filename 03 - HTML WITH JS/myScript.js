const greenButton = document.getElementById("green-button");
const body = document.body;
let isGreen = false;

greenButton.addEventListener("click", () => {
  if (isGreen) {
    body.style.backgroundColor = "lightblue";
    body.style.color = "black";
    isGreen = false;

  } else {
    body.style.backgroundColor = "green";
    body.style.color = "red";
    isGreen = true;
  }
});
