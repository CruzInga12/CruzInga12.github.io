let password = prompt("Ingrese la contraseña para ver el sobre:", "", {type: "password"});
if (password === "2B7D") {
  document.write(`
    <div class="container">
      <!-- your HTML structure here -->
    </div>
  `);
} else {
  alert("Contraseña incorrecta. Intente nuevamente.");
}

function openCard() {
  var card = document.getElementById("card");
  card.style.display = "block";
  createConfetti(); // call the confetti function here
}

function closeCard() {
  var card = document.getElementById("card");
  card.style.display = "none";
}

let confettiContainer = document.querySelector('.confetti-container');
// function createConfetti() {
  for (let i = 0; i < 20; i++) {
    let confettiPiece = document.createElement("div");
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.top = `${Math.random() * 100}%`;
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    confettiContainer.appendChild(confettiPiece);
  }
// }