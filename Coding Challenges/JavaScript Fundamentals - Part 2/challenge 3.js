'use strict';
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        let bmi = this.mass / (this.height * this.height);
        return bmi;
    }
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        let bmi = this.mass / (this.height * this.height);
        return bmi;
    }
}
mark.calcBMI();
john.calcBMI();

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()} is higher than ${john.fullName}'s (${john.calcBMI()})!`)
} else {
     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`)
}


