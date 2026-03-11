function twoSum(nums: number[], target: number): number[] {
    const result:number[]= [];
    let start = 0;
    let end = 0;

    for(let i = 0; i<nums.length ; i++){
        for(let j = 0 ; j<nums.length ; j++){
            if(i != j && (nums[i] +nums[j]==target)){
                start = i;
                end = j;
                continue;
            }
        }
    }
    result.push(start, end);

    return result;
};
const result = twoSum([2,7,11,15],9);
console.log(result);