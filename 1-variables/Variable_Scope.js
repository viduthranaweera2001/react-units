var _var = 10;
let _let = 20;
const _const = 30;

console.log('Main '+_var,_let,_const);

function scopeTest(){
    var _var2 = 100;
    let _let2 = 200;
    const _const2 = 300;

    if(true){
        var _var3 = 'one';
        let _let3 = 'two';
        const _const3 = 'three';
        console.log('If '+_var3,_let3,_const3); //block scope
    }
    console.log(_var3); //function scope

    console.log('Scope '+_var2,_let2,_const2);
}

scopeTest();