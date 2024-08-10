rollDice = () => {
  let randomNumber1 = Math.ceil(Math.random() * 6);
  let randomNumber2 = Math.ceil(Math.random() * 6);

  let image1 = "images/dice" + randomNumber1 + ".png";
  let image2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".dice .img1").setAttribute("src", image1);
  document.querySelector(".dice .img2").setAttribute("src", image2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
};

document.querySelector(".btn").addEventListener("click", rollDice)
