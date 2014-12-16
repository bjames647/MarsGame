function Player(x, y, width, height){
this._x = null;
this._y = null;
this._width = null;
this._height = null;
};
   
Player.prototype.Init = function(x, y, width, height) {
this._x = x;
this._y = y;
this._width = width;
this._height = height;
};

Player.prototype.GetX = function GetX() {
return this._x;
};

Player.prototype.GetY = function GetY() {
return this._y;
};

Player.prototype.GetWidth = function GetWidth() {
return this._width;
};

Player.prototype.GetHeight = function GetHeight() {
return this._height;
};