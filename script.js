'use strict';
//select palayers 

const playerEl0 = document.querySelector('.player--0 ');
const playerEl1 = document.querySelector('.player--1 ');
// select buttons
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
//select dice image
const diceimg = document.querySelector(".dice");
//select current and total scores
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");

const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");




//begining Seting
score0.textContent = 0;
score1.textContent = 0;
diceimg.classList.add("hidden")
let current_player = 0;
let current_score = 0;
let total_score = [0, 0];
let playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${current_player}`).textContent = 0;
    current_player = current_player == 0 ? 1 : 0;
    current_score = 0;
    playerEl1.classList.toggle("player--active");
    playerEl0.classList.toggle("player--active");


}

const init = function() {
    total_score = [0, 0];
    current_score = 0;
    current_player = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceimg.classList.add('hidden');
    playerEl0.classList.remove('player--winner');
    playerEl1.classList.remove('player--winner');
    playerEl0.classList.add('player--active');
    playerEl1.classList.remove('player--active');

}


//user click roll dice
btn_roll.addEventListener("click", function() {
    if (playing) {
        //Generate random number and show dice
        let random_dice = Math.trunc(Math.random() * 6) + 1
        diceimg.classList.remove("hidden");
        diceimg.src = `dice-${random_dice}.png`;
        // check for the roll 1
        if (random_dice !== 1) {
            console.log("hello")
            current_score += random_dice;
            document.getElementById(`current--${current_player}`).textContent = current_score;
        } else {
            switchPlayer()
        }
    }
})


btn_hold.addEventListener('click', function() {
    if (playing) {
        total_score[current_player] += current_score;
        document.getElementById(`score--${current_player}`).textContent = total_score[current_player]


        if (total_score[current_player] >= 100) {
            // Finish the game
            playing = false;
            diceimg.classList.add('hidden');

            document
                .querySelector(`.player--${current_player}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${current_player}`)
                .classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
})


btn_new.addEventListener("click", init)