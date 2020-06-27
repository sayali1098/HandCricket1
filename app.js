var Player1Score = 0;
console.log("Initial score of player 1: " + Player1Score);

var Player2Score = 0;
console.log("Initial score of player 2: " + Player2Score);

var Target = 50;
console.log("Target: " + Target + " Runs to Win");

var WicketsAllowed = 5;
console.log("Wickets Allowed: " + WicketsAllowed);

function Player2choice() {
    let P2choice = Math.floor(Math.random() * 6) + 1;
    return P2choice;
}

function PlayGame() {
    const win = document.querySelector('audio[data-key="enter"]');
    win.play();
    document.getElementById("begin").style.display = "none";
    document.getElementById("boardS").style.display = "inherit";
    document.getElementById("choiceS").style.display = "inherit";
    document.getElementById("participants").style.display = "inherit";
    document.getElementById("choice").style.display = "inherit";
    document.getElementById("res").style.display = "inherit";
}

function MakeRuns(p1) {
    const score = document.querySelector('audio[data-key="points"]');
    document.getElementById("result").innerHTML = " ";
    console.log("Player1 choice: " + p1);
    p2 = Player2choice();
    console.log("Player2 choice: " + p2);
    Player1Score = Player1Score + p1;
    Player2Score = Player2Score + p2;
    document.getElementById("sel1").innerHTML = p1;
    // choice1.innerHTML = p1;
    document.getElementById("sel2").innerHTML = p2;
    // choice2.innerHTML = p2;
    document.querySelector(".P1").src = `./assets/${p1}.png`;
    document.querySelector(".P2").src = `./assets/${p2}.png`;
    document.getElementById("player1score").innerHTML = Player1Score;
    document.getElementById("player2score").innerHTML = Player2Score;
    if (Player1Score >= Target || Player2Score >= Target) {
        Result(Player1Score, Player2Score);
        console.log(Player1Score);
    } else {
        if (p1 == p2) {
            WicketsAllowed--;
            const allout = document.querySelector('audio[data-key="allout"]');
            allout.play();
            document.getElementById("result").innerHTML = "WICKET!";
            if (WicketsAllowed == 0) {
                const allout = document.querySelector('audio[data-key="allout"]');
                allout.play();
                const tie = document.getElementById("tiegame");
                tie.classList.add("visible");
                RemoveOverlay();
            } else {
                document.getElementById("wickets").innerHTML = WicketsAllowed;
            }
        } else {
            score.play();
        }
    }
}

function Result(s1, s2) {
    if (s1 >= Target) {
        const win = document.querySelector('audio[data-key="win"]');
        win.play();
        const winner = document.getElementById("wingame");
        winner.classList.add("visible");
        RemoveOverlay();
    } else if (s2 >= Target) {
        const lose = document.querySelector('audio[data-key="lose"]');
        lose.play();
        const loser = document.getElementById("lostgame");
        loser.classList.add("visible");
        RemoveOverlay();
    }
}

function RemoveOverlay() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    overlays.forEach((overlay) => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            location.reload();
        });
    });
}