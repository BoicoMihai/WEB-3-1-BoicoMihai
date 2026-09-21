function calculateSum(a, b) {
  return a + b;
}

console.log(calculateSum(2, 3));   
console.log(calculateSum(10, 25)); 

const student = {
  name: "Mihai",
  age: 16,
  grade: 9,
  introduce: function () {
    console.log("Sunt " + this.name + " și am " + this.age + " ani.");
  }
};

student.introduce();
student.grade = 10;
console.log("Noua clasă: " + student.grade);

const choices = ["piatra", "hartia", "foarfeca"];

const gameScore = {
  player: 0,
  computer: 0,
  draws: 0,
  displayScore: function () {
    alert(
      "Scor:\nTu: " + this.player +
      "\nCalculator: " + this.computer +
      "\nEgalități: " + this.draws
    );
  }
};

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }
  if (
    (playerChoice === "piatra" && computerChoice === "foarfeca") ||
    (playerChoice === "foarfeca" && computerChoice === "hartia") ||
    (playerChoice === "hartia" && computerChoice === "piatra")
  ) {
    return "player";
  }
  return "computer";
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  let message;

  if (winner === "player") {
    gameScore.player++;
    message = "Ai câștigat!";
  } else if (winner === "computer") {
    gameScore.computer++;
    message = "Calculatorul a câștigat!";
  } else {
    gameScore.draws++;
    message = "Egalitate!";
  }

  document.getElementById("player-choice").textContent = playerChoice;
  document.getElementById("computer-choice").textContent = computerChoice;
  document.getElementById("result").textContent = message;
  document.getElementById("score-player").textContent = gameScore.player;
  document.getElementById("score-computer").textContent = gameScore.computer;
  document.getElementById("score-draws").textContent = gameScore.draws;

  setTimeout(function () {
    gameScore.displayScore();
  });
}

document.getElementById("btn-piatra").addEventListener("click", function () {
  playRound("piatra");
});
document.getElementById("btn-hartia").addEventListener("click", function () {
  playRound("hartia");
});
document.getElementById("btn-foarfeca").addEventListener("click", function () {
  playRound("foarfeca");
});

function resetGame() {
  gameScore.player = 0;
  gameScore.computer = 0;
  gameScore.draws = 0;

  document.getElementById("player-choice").textContent = "-";
  document.getElementById("computer-choice").textContent = "-";
  document.getElementById("result").textContent = "Alege o variantă";
  document.getElementById("score-player").textContent = 0;
  document.getElementById("score-computer").textContent = 0;
  document.getElementById("score-draws").textContent = 0;
}

document.getElementById("btn-reset").addEventListener("click", resetGame);