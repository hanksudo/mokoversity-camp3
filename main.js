var gameModule = (function() {

    var counter = 0;

    function start() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');

        var ballX = Math.floor(Math.random() * 250);
        var ballY = Math.floor(Math.random() * 200);
        var ballR = Math.floor(Math.random() * 100);

        canvas.width = 480;
        canvas.here = 320;

        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();

        if (counter >= 9) {
            gameOver();
        } else {
            counter++;
            console.log('Counter: ' + counter);
            setTimeout(start, 1000);
        }
    }

    function gameOver () {
        console.log('Game Over!');
    }

    return {
        start: start
    }
}) ();

gameModule.start();