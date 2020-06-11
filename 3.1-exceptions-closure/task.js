
 function parseCount(arg) {
     const parseArg = Number.parseInt(arg)
    if (Number.isNaN(parseArg)) {
       throw new Error("Невалидное значение");
    } return parseArg;
        
  
}

function validateCount(arg) {
    try {
    return parseCount(arg);
    }
    catch(err) {
        return err;
    }
    
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b < c) || 
            (a + c < b) ||
         (b + c < a)) 
        {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c; 
    }

    getArea() {
        const halfP = this.getPerimeter() / 2;
        const s = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        return Number(s.toFixed(3));
    }

}


 function getTriangle(a, b, c) {
    let triangle;
try {
   return triangle = new Triangle(a, b, c);
}
catch(err) {
    return triangle = {
        getPerimeter() {return 'Ошибка! Неправильный треугольник'},
        getArea() {return 'Ошибка! Неправильный треугольник'}
    }
 } 
}
 