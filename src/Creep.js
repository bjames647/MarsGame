function Creep(x, y, width, height){
    this._x = null;
    this._y = null;
    this._width = null;
    this._height = null;
};
   
Creep.prototype.Init = function(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
};

Creep.prototype.GetX = function GetX() {
    return this._x;
};

Creep.prototype.GetY = function GetY() {
    return this._y;
};

Creep.prototype.GetWidth = function GetWidth() {
    return this._width;
};

Creep.prototype.GetHeight = function GetHeight() {
    return this._height;
};

Creep.prototype.DrawCreep = function DrawCreep() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.GetX(), this.GetY(), this.GetWidth(), this.GetHeight());
}

Creep.prototype.Grow = function Grow() {
    var i = 0;
    while (i < 10) {
        var distance = 5;
        Creep.prototype.Init(distance + this.GetX(), distance + this.GetY(), this.GetWidth(), this.GetHeight()); //grow in distance but stay size
        //Creep.prototype.Init(this.GetX(), this.GetY(), distance + this.GetWidth(), distance + this.GetHeight());//grow in size 
        Creep.prototype.DrawCreep();
        console.log(i);
        i++;
    } 
}