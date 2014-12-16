function init() {
    this.c = document.getElementById("myCanvas");
    this.c.height = 600;
    this.c.width = 900;
    this.ctx = this.c.getContext("2d");
    
    window.requestAnimFrame(Update);
};



function Update()
{
    Creep.prototype.Init(100,200,10,10);
    Creep.prototype.DrawCreep();
    Creep.prototype.Grow();
    Player.prototype.Init(100,100,50,50);
    Player.prototype.DrawPlayer();

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