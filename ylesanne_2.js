class Person {
    constructor(firstname = "", lastname = "", age = 0) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

const person1 = new Person('Pets', 'Kuusk', 50)
const person2 = new Person('Jaak', 'Tuvi', 24)
const person3 = new Person('James', 'Bond', 68)

const student1 = new Student('Maali', 'Kasukas', 16)
const student2 = new Student('Kelvin', 'Melvin', 18)
const student3 = new Student('Peeter', 'Saan', 21)

console.log(person1)
console.log(person2)
console.log(person3)
console.log()
console.log(student1)
console.log(student2)
console.log(student3)