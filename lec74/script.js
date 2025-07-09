let button  = document.getElementById("btn")
button.addEventListener("dblclick", () =>{
    document.querySelector(".box").innerHTML = "<b> yaah i got clicked </b> enjoy the tap !!"
})

button.addEventListener("contextmenu", () =>{
alert("do right click")
})

document.addEventListener("keydown", (e) =>{
console.log(e, e.key, e.keyCode)
})