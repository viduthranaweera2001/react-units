this.name = 'Viduth';

const obj1 = {
    name:'John',
    normal_function: function(){
        console.log('normal function '+this.name);
    },

    arrow_function:()=>{
        console.log('arrow function '+this.name);
    }
}

// console.log(this.name);

obj1.normal_function();
obj1.arrow_function();