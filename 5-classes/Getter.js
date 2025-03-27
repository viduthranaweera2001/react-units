class Square{
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    getArea(){
        console.log(this.width);
        console.log(this.height);
        return this.width * this.height;
    }

    get area(){
        return this.width * this.height;
    }

    set area(newArea){
        this.width = Math.sqrt(newArea);
        this.height = Math.sqrt(newArea);
    }
}

const newSquare = new Square(10);
console.log(newSquare.getArea());
console.log(newSquare.area);

newSquare.area = 25;
console.log(newSquare.getArea());