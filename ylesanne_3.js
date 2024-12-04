class Student {
    #name
    #id
    #status
    constructor(name, id) {
        this.#id = id
        this.#name = name
        this.#status = 'Active'
    }

    getName() {
        return this.#name
    }

    getStatus() {
        return this.#status
    }

    setStatus(status) {
        const statues = ['Active', 'Expelled', 'Fisihed', 'Inactive']
        if (statues.includes(status)) {
            this.#status = status
        }
    }
}

const student = new Student('John', 1)
console.log(student, student.getName())