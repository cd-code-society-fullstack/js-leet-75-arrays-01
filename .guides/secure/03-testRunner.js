const containsNearbyDuplicate = require("../../problem03");
let nums = process.argv[2].split(',').map(Number);  // split the string by ',' and convert each element to a number
let target = Number(process.argv[3]);  // convert the string to a number

console.log(containsNearbyDuplicate(nums, target));   
