
// Global variables ><
let wins = 0;
let loses = 0;

// hapus semua console lognya setelah selesai local testing
console.log("olaa");
const res = document.querySelector("#tulisan");

// winp sama losep agak confusing (winPointNode atau losePointNode mungkin, js pake camelCase haha)
let winp = document.querySelector("#winscore");
let losep = document.querySelector("#losescore");

// console log
console.log(res.textContent);
console.log("hello");

// Naming, I think playem is not a good name, simply playRoundWith(playerMove) itu mungkin lebih enak dibaca
function playem(move) {
    let choice = Math.floor(Math.random()*3);
    let compMoves = ['rock', 'paper', 'scissor'];
    let compMove = compMoves[choice];
    // console log
    console.log(choice);

    determiner(move, compMove);
}

// Naming, I think handleWin is a much better name
// there shouldnt be any space after function nam,e
function win (player, comp) {
    wins += 1;
    winp.textContent = wins;
    res.textContent = "You beat " + comp + " with " + player + ", nice!"
}

// sama kayak di atas
function lose (player, comp) {
    loses += 1;
    losep.textContent = loses;
    res.textContent = "Boo, your " + player + " lose to " + comp + "!";
}

// comp variable is not used
function tie(player, comp) {
    res.textContent = "Looks like it's a tie between " + player + "!";
}

// Naming, probably handleResult atau semacamnya is a better name
function determiner (player, comp) {
    // btw daripada pake string gini enak pake enum: https://www.sohamkamani.com/blog/2017/08/21/enums-in-javascript/
    // kalo string gini typo 1 gg hahaha

    // Javascript equalizernya pake ===, bukan ==. Banyak hal menarik bisa terjadi kalo pake ==
    // Basically === itu determine dia same type sama same value
    if (player == 'rock') {
        if (comp == 'scissor') {
            win(player, comp);
        } else if (comp == 'paper') {
            lose(player, comp);
        } else {
            tie(player, comp);
        // unnecessary semicolon, abis if braces ga perlu semicolon
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
// Biasain kasih endline after the last line
