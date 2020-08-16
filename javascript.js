let wins = 0;
let loses = 0;
console.log("olaa");
const res = document.querySelector("#tulisan");
let winp = document.querySelector("#winscore");
let losep = document.querySelector("#losescore");
console.log(res.textContent);
console.log("hello");

function playem(move) {
    let choice = Math.floor(Math.random()*3);
    let compMoves = ['rock', 'paper', 'scissor'];
    let compMove = compMoves[choice];
    console.log(choice);

    determiner(move, compMove);
}
function win (player, comp) {
    wins += 1;
    winp.textContent = wins;
    res.textContent = "You beat " + comp + " with " + player + ", nice!"
}

function lose (player, comp) {
    loses += 1;
    losep.textContent = loses;
    res.textContent = "Boo, your " + player + " lose to " + comp + "!";
}

function tie(player, comp) {
    res.textContent = "Looks like it's a tie between " + player + "!";
}

function determiner (player, comp) {
    if (player == 'rock') {
        if (comp == 'scissor') {
            win(player, comp);
        } else if (comp == 'paper') {
            lose(player, comp);
        } else {
            tie(player, comp);
        };
    } else if (player == 'paper') {
        if (comp == 'scissor') {
            lose(player, comp);
        } else if (comp == 'paper') {
            tie(player, comp);
        } else {
            win(player, comp);
        };
    } else {
        if (comp == 'scissor') {
            tie(player, comp);
        } else if (comp == 'paper') {
            win(player, comp);
        } else {
            lose(player, comp);
        };
    }
}