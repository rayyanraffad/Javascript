'use strict';
let dolphinsScore = [96,108,89];
let koalasScore = [88,91,110];
let dolphinsTotal = 0;
let koalasTotal = 0;

for (let i = 0; i < dolphinsScore.length; i++) {
    dolphinsTotal += dolphinsScore[i];
    koalasTotal += koalasScore[i];
}

let dolphinsAverage = dolphinsTotal / dolphinsScore.length;
let koalasAverage = koalasTotal / koalasScore.length;

if (dolphinsAverage > koalasAverage && dolphinsAverage>= 100) {
    console.log(`Dolphins have won the game`);
} else if (dolphinsAverage < koalasAverage && koalasAverage>= 100) {
    console.log(`Koalas have won the game`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("There is a draw between the teams");

}  else {
    console.log("No team wins");
}