
 function parseCount(arg) {
    if (Number.isNaN(Number.parseInt(arg))) {
        const err = new Error("Невалидное значение"); 
        throw err;
    } return Number.parseInt(arg);
        
  
}

function validateCount(arg) {
    try {
        parseCount(arg);
    }
    catch(err) {
        return "Невалидное значение";
    }
    return parseCount(arg);
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((this.a + this.b < this.c) || 
            (this.a + this.c < this.b) ||
         (this.b + this.c < this.a)) 
        {
            const err = new Error("Треугольник с такими сторонами не существует"); 
            throw err;
        }
    }

    getPerimeter() {
        const p = this.a + this.b + this.c;
        return p;
    }

    getArea() {
        const halfP = getPerimeter() / 2;
        const s = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        return s.toFixed(3);
    }

}


 function getTriangle(a, b, c) {
let triangle = new Triangle(a, b, c);
try {
    triangle;
}
catch(err) {
    return  triangle.getPerimeter("Ошибка! Неправильный треугольник");
 } return triangle;
 }