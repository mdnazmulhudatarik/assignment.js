// https://github.com/mdnazmulhudatarik/assignment.js




// kilometerToMeter Convert  Assignment

function kilometerToMeter(n) {
    var meterCalculate = n * 1000;
    return meterCalculate;
}

var result = (kilometerToMeter());
console.log(result);




// budgetCalculator Assignment

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;

    var totalPrices = watchPrice + mobilePrice + laptopPrice;

    return totalPrices;
}

var totalBudget = (budgetCalculator());
console.log(totalBudget);




// hotelCost Assignment

function hotelCost(n) {
    var totalCost = 0;

    if( n <= 10) {
        totalCost = n * 100;

    }
    else if(n <=20) {
        var firstTenDayCost = 10 * 100;
        var remainingDay = n - 10;
        var secondTenDayCost = remainingDay * 80;

        totalCost = firstTenDayCost + secondTenDayCost;

    }
    else {
        var firstTenDayCost = 10 * 100;
        var secondTenDayCost = 10 * 80;
        var remainingDay = n - 20;
        var afterTwentyDayCost = remainingDay * 50;

        totalCost = firstTenDayCost + secondTenDayCost + afterTwentyDayCost;
    }

    return totalCost;
}

var hotelBill = (hotelCost());
console.log (hotelBill);