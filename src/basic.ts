const a: number = 10;

console.log(a);

function sum(a: number, b : number) :number{   // It is not mandatory to mention the return type as ts can infer the type automatically.
    return a + b;
}

function callbk(fn : () => void) { // Here specifiny type is mandatory..
    setTimeout(fn, 1000)
}

callbk(function() {
    console.log("Hello Shubham")
})