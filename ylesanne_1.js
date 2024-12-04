class Student {
    constructor(name) {
        this.name = name
        this.finished = false
    }
}

const newStudent_1 = new Student('Jonh')
const newStudent_2 = new Student('Mary')
console.log(newStudent_1.name, newStudent_1.finished)
console.log(newStudent_2)