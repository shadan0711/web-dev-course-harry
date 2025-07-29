// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000)
//     })
// }
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
        let data = await x.text()
        // let data = await x.json()
        console.log(data)
        return 455
}
async function main() {

    console.log("loading module")
    console.log("do something else")
    console.log("load data")
    let data = await getData()
    console.log(data)
    console.log("process data")
}
main()
// data.then((v) => {


//     console.log(data)
//     console.log("process data")
// })