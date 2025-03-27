const arr1 = [1,2,3,4,5];

function sum(a,b,c){
    console.log(a+b+c);
}

sum(...arr1);

function sum2(...args){
    let sum = 0;
    for (const arg of args){
        sum += arg;
    }
    console.log(sum);
}

sum2(...arr1);