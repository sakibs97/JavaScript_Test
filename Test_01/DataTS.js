// Primitive Datatype
// String, Number, Boolean, Symbole, Undifine, BigInt, Null

let x = "Dark";
let y= 657346
let z= false
let u = 1213344356566765776757n
let v;

let w = Symbol(y)
let b = Symbol(y)

// console.log(typeof w); 
// console.log(typeof b); 

// Non-Primitive Datatype
// Arrey, Obbject, Function

let xx = [23, "ssss", 22222n, true, 23.345, Symbol(3424), undefined]

let obj = {
    name: x,
    age: 20
}

// console.log(obj);

const mainFunction = function(){
    console.log("Hello");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The stack and heap are two different regions of memoray used programs for storing data.

// Stack:
let aStack = 'Sakifg'

let bstack = aStack

bstack = "dd"

console.log(aStack);
console.log(bstack);

//  Heap:

let hHeap = {
    name : "Sakib",
    age:23
}

let cHeap = hHeap

cHeap.name= "Al-Amin"
cHeap.age= 24

// console.log(cHeap);
// console.log(hHeap);


// Practic
// 
// Stack

let planA = "Room"
let planB = 12
planC = planB
// planD = planB
// planD = planC
planC = 23

// console.log(planB);

// Heap
let arrOne = ['Sakib', 'Hridoy', 13]

let arrTwo = arrOne

 arrTwo = ['Shuvo', 'Fahim', 'Tanim', 24]

let goX = {
    name: "Al-Amin",
    age: 220
}

goZ = goX

goZ.name = 'Nahihan'
goZ.age = 25

console.table(arrTwo);
console.table(goZ);






