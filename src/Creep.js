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