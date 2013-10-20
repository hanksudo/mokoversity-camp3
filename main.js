var gameModule = (function() {

    var counter = 0,
        ballX,
        ballY,
        ballR,
        colors = ['#ff0000', '#0000ff', 'green'];

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY;

        console.log('Clicked ' + x + ", " + y);

        var tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);
        if (tmp < ballR * ballR) console.log("Hit ! Good.");
    }

    function start() {
        document.getElementById('main').addEventListener('click', touchEvent, false);
        startGame();
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
            counter++;
            console.log('Counter: ' + counter);
            setTimeout(startGame, 1000);
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