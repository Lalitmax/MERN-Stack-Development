"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const num = 3;
let arr = [1, "s"];
// function
function add(a, b) {
    return a + b;
}
let sum = add(1, 2);
console.log(sum);
function print() {
    console.log('hi baby');
}
// enum
var dictionary;
(function (dictionary) {
    dictionary["left"] = "LEFT";
    dictionary["right"] = "RIGHT";
})(dictionary || (dictionary = {}));
console.log(dictionary.right);
print();
let abc = function () {
    return 3;
};
function abcCallback(func) {
    func();
}
abcCallback(abc);
