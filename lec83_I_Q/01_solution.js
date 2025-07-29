let students = ["shadan" , "anjali" , "fahad" , "luckeshwar" , "mahi" , "emanuel" , "zoranuddinsarr" , "ravikishan" , "kaif" , "ilma"]

let house = []
for (const student of students) {
    if(student.length < 6){
        house.push("gryffindor")
    }
    else if(student.length < 8){
        house.push("hufflepuff")
    }
    else if(student.length < 10){
        house.push("ravenclaw")
    }
    else if(student.length > 10){
        house.push("syltherin")
    }
}
console.log(house)