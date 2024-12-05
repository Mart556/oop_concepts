class Shape {
    constructor(color) {
        this.color = color
    }

    setColor(color) {
        this.color = color
    }

    getColor() {
        return this.color
    }

    getArea() {
        console.log('Area of shape')
    }
}

const shape = new Shape('Valge')
console.log(shape.getColor())
shape.getArea()

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }

    getArea() {
        return Math.PI * (this.radius ** 2)
    }
}

const circle = new Circle('Kollane', 5)
console.log(circle.getArea())

class Square extends Shape {
    constructor(color, side) {
        super(color)
        this.side = side
    }

    getArea() {
        return (this.side ** 2)
    }
}

const square = new Square('Punane', 4)
console.log(square.getArea())

class Rectangle extends Shape {
    constructor(color, width, length) {
        super(color)
        this.width = width
        this.length = length
    }

    getArea() {
        return this.length ** this.width
    }
}

const rectangle = new Rectangle('Sinine', 6, 4)
console.log(rectangle.getArea())


class Paint {
    constructor() {
        this.shapes = []
    }

    addShape(shape) {
        this.shapes.push(shape)
    }

    getShapes() {
        return this.shapes
    }

    calculateTotalArea() {
        let totalArea = 0;
        this.shapes.forEach(shape => {
            totalArea += shape.getArea()
        })

        return totalArea
    }

    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle)
    }

    getSquares() {
        let squares = [];
        this.shapes.forEach(shape => {
            if (shape instanceof Square) {
                squares.push(shape)
            }
        })

        return squares
    } 

    getRectangles() {
        let rectangles = []
        this.shapes.forEach(shape => {
            if (shape instanceof Rectangle) {
                rectangles.push(shape)
            }
        })

        return rectangles
    }
}

const paint = new Paint()

const circle2 = new Circle('Roheline', 8)
const circle3 = new Circle('Lilla', 10)

const square2 = new Square('Roheline', 8)
const square3 = new Square('Lilla', 10)

const rectangle2 = new Rectangle('Roheline', 8, 16)
const rectangle3 = new Rectangle('Lilla', 10, 15)

paint.addShape(circle)
paint.addShape(square)
paint.addShape(circle2)
paint.addShape(square2)
paint.addShape(circle3)
paint.addShape(square3)
paint.addShape(rectangle)
paint.addShape(rectangle2)
paint.addShape(rectangle3)

console.log(paint.calculateTotalArea(), paint.getCircles())