class Rectangle{
    constructor(_width,_height,_color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
        console.log('A new Rectangle created.');
    }

    getArea(){
        return this.width*this.height;
    }

    aboutMe(){
        return `I am a Rectangle and my width is ${this.width}.
        my height is ${this.height}.
        I am ${this.color} color.`
    }
}

const newRectangle = new Rectangle(10,8,'red');
console.log(newRectangle.getArea());
console.log(newRectangle.aboutMe());

const newRectangle2 = new Rectangle(15,10,'yellow');
console.log(newRectangle2.getArea());
console.log(newRectangle2.aboutMe());