const num : number = 3;
 
let arr : [number, string] = [1,"s"];


// function

function add(a : number,b : number) : number {
    return a+b;
}

let sum = add(1, 2);
console.log(sum)

function print() :void {
    console.log('hi baby'); 
}


// enum

enum dictionary {
    left = "LEFT",
    right = "RIGHT",
}

console.log(dictionary.right)
print()

let abc = function() : number {
    return 3;
}
 
function abcCallback(func : () => number) : void{
    func();
}
abcCallback(abc)

export {}