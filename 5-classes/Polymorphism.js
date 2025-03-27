class Animal{
    constructor() {
        console.log('An animal is Created.')
    }

    makeSound(){
        console.log('Animal Generally make sounds')
    }
}

class Dog extends Animal{
    constructor() {
        super();
        console.log('A Dog Created');
    }
    makeSound() {
        console.log('Dogs Normally Bark.')
    }
}

// const someAnimal = new Animal();
// someAnimal.makeSound();

const tommy = new Dog();
tommy.makeSound();