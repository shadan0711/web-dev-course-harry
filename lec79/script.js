let a = prompt ("Enter first number")
let b = prompt ("Enter second number")
// let sum = (a) +  (b);
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry not permisable")
}
let sum = parseInt(a) + parseInt (b);
let  x = 1
try {

    console.log("the sum is ", sum*x )
    
} catch (error) {
    console.log("error aa gya bhai ")
}