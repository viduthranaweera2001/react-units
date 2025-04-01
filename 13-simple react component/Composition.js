function add2(x){
    return x + 2;
}

function multiplyBy3(x){
    return x * 3;
}

function substract(x){
    return x - 1;
}

// let y = substract(multiplyBy3(add2(5)));
// console.log(y);

function compose() {
    var functions = arguments;
    return function (input) {
        var value = input;
        for (var i = 0; i <= functions.length - 1; i++) {
            value = functions[i](value);
        }
    }
}

var allInOneFunction = compose(add2,multiplyBy3,substract);

var result = allInOneFunction(5);

console.log(result);
