'use strict';
let tip;
const bills = [];
const tips = [];
const arrayTotal  = [];

const calcTip = function (billValue) {
    bills.push(billValue)
    if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
        tips.push(tip);
        return tip = (billValue * 0.15) + billValue;
    } else {
        tip = billValue * 0.2;
        tips.push(tip)
        return tip = (billValue * 0.2) + billValue;
    }
}
arrayTotal.push(calcTip(100));
arrayTotal.push(calcTip(125));
arrayTotal.push(calcTip(555));
arrayTotal.push(calcTip(44));
console.log(`Bills array: ${bills}, Tips array: ${tips} and Total Array(bill + tip): ${arrayTotal}`);
