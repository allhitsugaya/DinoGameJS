const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let gameInterval;
let score = 0;
const scoreDisplay = document.getElementById("score");

document.addEventListener("keydown", function (e) {
    if (e.key === " " && !dino.classList.contains("jump")) {
        jump();
    }
});

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

function startGame() {
    dino.style.top = "150px";
    cactus.style.left = "100%";

    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    // Запуск игры
    gameInterval = setInterval(function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            alert("GAME OVER");
            clearInterval(gameInterval);
            setTimeout(startGame, 1000);
        }
    }, 50);
}
startGame();
