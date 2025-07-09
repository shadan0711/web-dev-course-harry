// function nice(name) {
//     console.log("hey " + name + " you are doing great ");
//     console.log("hey " + name + " you are looking good  ");
//     console.log("hey " + name + " how are you doing ? ");
//     console.log("hey " + name + " you are coming today? ");
    
// }
// nice("dev");
// nice("rahul");
// nice("krish");
// console.log("hey shadan ! you are doing great ");
// console.log("hey shadan ! you are looking good ");
// console.log("hey shadan ! how are you doing ? ");
// console.log("hey shadan ! you are coming today? ");


function sum(a, b, c=20) {
    // console.log(a+b);
    return a+b+c;
}
result1 = sum(30, 5);
result2 = sum(3, 50);
result3 = sum(30, 50, 10);
console.log("the sum of these numbers is = " , result1);
console.log("the sum of these numbers is = " , result2);
console.log("the sum of these numbers is = " , result3);