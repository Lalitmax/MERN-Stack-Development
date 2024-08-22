"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toLowerCase();
}
function signUpUser(name, email, password, isPad) {
    return true;
}
var loginUser = function (name, emaol, isPad) {
    if (isPad === void 0) { isPad = false; }
    return true;
};
addTwoo(5);
getUpper('abc');
signUpUser("Lalit", "ab@gmail.com", "124", true);
loginUser('lalit', "l@gmail.com");
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
