// let obj = {
// a:1,
// b:"shadan"
// }
// console.log(obj)

// let animal = {
//     eats : true
// };
// let rabbit = {
//     jump : true
// };

// rabbit.__proto__ = animal; 

class Animal{
    constructor(name){
        this.name = name
        console.log("object is created")
    }
    eats(){
        console.log("kha rhaa hunn")
    }
    jumps(){
        console.log("kood rhaa hunn")
    }
}
class Lion extends Animal{
constructor(name){
    super(name)
    console.log("obj is created and he is a lion....")
}
eats(){
    console.log("kha rha hoon roar")
}
}

let a =new Animal("bunny")
console.log(a)

let l = new Lion("shera")
console.log(l)