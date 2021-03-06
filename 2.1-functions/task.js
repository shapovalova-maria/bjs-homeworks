function getSolutions (a, b, c) {
    let D;

    D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return {'D': D, 'roots': []};
    } else if (D == 0) {
        let x1 = - b / (2 * a);
        return {'D': D, 'roots': [x1]};
    } else {
        let x1 = (- b + Math.sqrt(D)) / (2 * a);
        let x2 = (- b - Math.sqrt(D)) / (2 * a);
        return {'D': D, 'roots': [x1, x2]};
    }
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);

    if (result.D < 0) {
        return(`Вычисляем корни квадратного уравнения ax² + bx + c\n 
    Значение дискриминанта: ${result.D}\n
    Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        return(`Вычисляем корни квадратного уравнения ax² + bx + c\n
        Значение дискриминанта: ${result.D}\n
        Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        return(`Вычисляем корни квадратного уравнения ax² + bx + c\n
        Значение дискриминанта: ${result.D}\n
        Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}


function getAverageScore(date) {
    let sum = 0;
    let total = 0;
  for (let key in date) {
      for (let i = 0; i < date[key].length; i++) {
        sum += date[key][i];
    } date[key] = sum / date[key].length;
   
    sum = 0;
    total += date[key];
  } total = total / Object.keys(date).length;
 
  date.average = total || 0;

  return date;

}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i <  marks.length; i++) {
        sum += marks[i];
    } sum = sum / marks.length || 0;

    return sum;
}


function getPersonData(secretData) {
let firstName;
let lastName;

if (secretData.aaa === '' || secretData.bbb === '') {
    getDecodedValue(secretData);
} else if (secretData.aaa == 0) {
        firstName = 'Родриго';
    } else {firstName = 'Эмильо';
     }
    if (secretData.bbb == 0) {
        lastName = 'Родриго';
    } else {lastName = 'Эмильо'}

    return {firstName: firstName,
        lastName: lastName};   

}

function getDecodedValue(secret) {
    if (secret == 0) {
        return 'Родриго';
    } else {
        return'Эмильо'};
}