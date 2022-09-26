window.onload = function init() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext('2d');
			
    context.font = '20pt Calibri';
    context.fillStyle = 'green';
    context.fillText('Welcome to Tutorialspoint', 70, 70);
}