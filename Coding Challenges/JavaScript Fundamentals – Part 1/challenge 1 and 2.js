'use strict';
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark*heightMark);
let BMIJohn = massJohn / (heightJohn*heightJohn);
let markHigherBMI;
if (BMIMark>BMIJohn) {
    markHigherBMI = true;
    console.log(`Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}, hence, Mark has a higher BMI.`);
} else {
    markHigherBMI = false;
    console.log(`Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}, hence, John has a higher BMI.`);
}