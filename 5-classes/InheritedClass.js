class Person{
    constructor(_name,_age) {
        this.name = _name;
        this.age = _age;
        console.log(`A new Person Created.`);
    }
}

class Programmer extends Person{
    constructor(_name,_age,_language) {
        super(_name,_age);
        this.name = _name;
        this.age = _age;
        this.language = _language;
    }

    code(){
        return `${this.name} is a programmer & knows ${this.language}.`
    }
}

const john = new Person('John','32');
const viduth = new Programmer('Viduth','24','Java');
console.log(viduth.code())

