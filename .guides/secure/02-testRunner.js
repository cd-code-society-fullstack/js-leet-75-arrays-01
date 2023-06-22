const maxProfit = require("../../problem02");

let input1 = process.argv[2].split(',').map(Number);  // split the string by ',' and convert each element to a number

console.log(maxProfit(input1));   
