function sum(a,b,c){
    console.log(a+b+c);
}

const arr1 = [1,2,3];
const obj1 = {one:10,two:20,three:30};

sum(...arr1);
// sum(...obj1);//cannot pass object (key,value)
// console.log(obj1["one"])

sum(...Object.values(obj1))