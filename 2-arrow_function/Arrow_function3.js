function add(a,b,c){
    return arguments;
}

console.log(add(10,20,30));

const add2 = (a,b,c)=>{
    return arguments;
}

console.log(add2(10,20,30)); //not return arguments in arrow function