let a = [1,45,67,12,32]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

a.forEach((value, index,  element) => {
    console.log(value, index, a)
});