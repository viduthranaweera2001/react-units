const arr1 = [1,2,3];
const arr2 = ['x','y','z'];

console.log(arr1,arr2);

function sum(a,b,c){
    console.log(a+b+c);
}

sum(...arr1);