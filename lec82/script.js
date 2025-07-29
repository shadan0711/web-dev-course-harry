async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
function sum(a,b,c){
    return a+b+c;
}
(async function main() {
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(a)

    // let [x,y,...rest ]= [1,4,2,6,2,8,9]
    // console.log(x,y,rest)

    let obj = { 
        a:1,
        b:2,
        c:3
    }
    // let {a,b,c} = obj
    // console.log(a,b)
    // console.log(c)
    // let arr = [1,2,3]
    // console.log(arr[0] + arr[1] + arr[2])
    // console.log(sum(arr[0], arr[1], arr[2]))
    // console.log(sum(...arr))
    const a ="the "
    const b ="NO "
    const c = {a,b}
    console.log(c)
})()
