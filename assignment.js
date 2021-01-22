// https://github.com/mdnazmulhudatarik/assignment.js



// kilometerToMeter Convert

function kilometerToMeter(n) {
    var meterCalculate = n * 1000;
    return meterCalculate;
}

var result = (kilometerToMeter());
console.log(result);




// budgetCalculator 

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;

    var totalPrices = watchPrice + mobilePrice + laptopPrice;

    return totalPrices;
}

var totalBudget = (budgetCalculator());
console.log(totalBudget);

