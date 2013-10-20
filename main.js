var gameModule = (function() {

    var counter = 0;

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY;

        console.log('Clicked ' + x + ", " + y);
    }

    function start() {
        document.getElementById('main').addEventListener('click', touchEvent, false);
        startGame();
    }

    function startGame() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');

        var ballX = Math.floor(Math.random() * 500);
        var ballY = Math.floor(Math.random() * 300);
        var ballR = Math.floor(Math.random() * 150);

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