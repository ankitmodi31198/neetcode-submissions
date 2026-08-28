class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        // let duplicateFound = false;

        // if (nums.length && nums.length > 1) {
        //     for(let ittr = 0 ; ittr < nums.length ; ittr++) {
        //         for (let ittr2 = ittr + 1 ; ittr2 < nums.length ; ittr2++) {
        //             if (nums[ittr] == nums[ittr2]) {
        //                 duplicateFound = true;
        //                 break;
        //             }
        //         }
        //     }
        // }
        
        // return duplicateFound;

        return !(new Set(nums).size == nums.length);

    }
}
