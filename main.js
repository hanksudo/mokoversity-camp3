var gameModule = (function() {

    var counter = 0;

    function start() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');

        var ballX = Math.floor(Math.random() * 500);
        var ballY = Math.floor(Math.random() * 300);
        var ballR = Math.floor(Math.random() * 120);

        canvas.width = 640;
        canvas.height = 360;

        ctx.fillStyle = 'green';
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