function twoSumUniquePairs(nums, target) {
    let map = new Map();
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            // The pair is unique only if the index of the corresponding pair is different
            if(!result.find(pair => pair.includes(map.get(target - nums[i])))){
                result.push([map.get(target - nums[i]), i]);
            }
        }
        map.set(nums[i], i);
    }
    return result;
}

module.exports = twoSumUniquePairs;


