function randomSelectWin() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var diceRandomSrc1 = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", diceRandomSrc1);

    var diceRandomSrc2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", diceRandomSrc2);

    if (diceRandomSrc1 > diceRandomSrc2) {
        document.querySelector("h1").textContent = "Player 1 win!";
    } else if (diceRandomSrc1 < diceRandomSrc2) {
        document.querySelector("h1").textContent = "Player 2 win!";
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
}