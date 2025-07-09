console.log("u a hecker")
console.log("i m a hacker")

setTimeout(() => {
    console.log("i am inside set_timeout")
}, 2000);
setTimeout(() => {
    console.log("i am inside set_timeout_2")
}, 2000);

console.log("the end")
const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("shadan")
    document.head.append(sc)

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)