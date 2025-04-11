"use strict";
const a = 10;
console.log(a);
function sum(a, b) {
    return a + b;
}
function callbk(fn) {
    setTimeout(fn, 1000);
}
callbk(function () {
    console.log("Hello Shubham");
});
