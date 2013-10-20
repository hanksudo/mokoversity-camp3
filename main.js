/*jslint browser: true, devel: true, closure: true */

var gameModule = (function () {

    "use strict";

    var counter = 0,
        ballX,
        ballY,
        ballR,
        colors = ['#ff0000', '#0000ff', 'green'],
        scores = 0;

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

        console.log('Clicked ' + x + ", " + y);

        if (tmp < ballR * ballR) {
            scores += 10;
            console.log("Hit ! Good. Scores: " + scores);
        }
    }

    function gameOver() {
        console.log('Game Over!');
    }

    function startGame() {
        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d');

        ballX = Math.floor(Math.random() * 500);
        ballY = Math.floor(Math.random() * 300);
        ballR = Math.floor(Math.random() * 150);

        canvas.width = 640;
        canvas.height = 360;

        ctx.fillStyle = colors[counter % colors.length];
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();

        if (counter >= 9) {
            gameOver();
        } else {
            counter = counter + 1;
            console.log('Counter: ' + counter);
            setTimeout(startGame, 1000);
        }
    }

    function start() {
        document.getElementById('main').addEventListener('click', touchEvent, false);
        startGame();
    }

    return {
        start: start
    };
}(document));

gameModule.start();