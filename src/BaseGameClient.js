function init() {
    this.c = document.getElementById("myCanvas");
    this.c.height = 600;
    this.c.width = 900;
    this.ctx = this.c.getContext("2d");
    
    window.requestAnimFrame(Update);
};

function Update()
{
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fillRect(0,0,150,75);

    window.requestAnimFrame(Update);
};

window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();