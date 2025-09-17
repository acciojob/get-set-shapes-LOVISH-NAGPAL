//complete this code
class Rectangle {
construtor(width,height){
this.width=width
	this.height=height
}
	set width(width){
		this._width=width
	}
	set height(height){
		this._height=height
	}
	getArea(){
		return this._width*this._height
	}
}

class Square extends Animal {

constructor(side){
	super(side,side)
}
	getPerimeter(){

		return 4*this._width
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
