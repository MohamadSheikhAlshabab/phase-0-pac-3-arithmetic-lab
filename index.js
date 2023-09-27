function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment(a){
    return ++a;
}

function decrement(a){
    return --a ;
}

function makeInt(n){
    if (typeof(n) === "string" && n[1] !== "x" ) 
        return `${n}`
    if (parseInt(n).toString(10))
        return 0
    return isNaN(n) 
}

function preserveDecimal(n){
    return typeof(n) === "string" ? parseFloat(n) : isNaN(n);
}
