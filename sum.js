function sum(a,b){
    return a+b;
}

function subtract(a,b){
    
    return a-b;
}

function divide(a,b){
    if(b==0)
    return undefined;
    return a/b;
}

function multiply(a,b){
    return a*b;
}

module.exports = {
    sum: sum,
    subtract: subtract,
    divide : divide,
    multiply : multiply,
};