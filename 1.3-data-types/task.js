'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let bodyCredit;
    let paidMonth;
    let totalMonth;
    let yearOfCredit = date.getFullYear();
    let yearToday = new Date().getFullYear();
    let percentOfCredit;

    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    // date = date.getFullYear();

    if (typeof percent !== 'number') {
        totalAmount = `Параметр процентная ставка содержит неправильное значение ${percent}`;
    } else if (typeof contribution !== 'number') {
        totalAmount = `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`;
    } else if (typeof amount !== 'number') {
        totalAmount = `Параметр сумма кредита содержит неправильное значение ${amount}`;
     } else 
    //if (typeof date !== 'number') {
    //     totalAmount = `Параметр срок содержит неправильное значение ${date}`;
    // } else
     {
        bodyCredit = amount - contribution;
        percentOfCredit = (percent / 12) / 100;
        totalMonth = (yearOfCredit - yearToday) * 12;
        paidMonth = bodyCredit * (percentOfCredit + (percentOfCredit / (Math.pow((1 + percentOfCredit), totalMonth) - 1)));
        totalAmount = bodyCredit + paidMonth;
       
     }
    
     return Math.round10(totalAmount, -2);
}

function getGreeting(name) {
    
    return `Привет, мир! Меня зовут ${name || "Аноним"}`;
}