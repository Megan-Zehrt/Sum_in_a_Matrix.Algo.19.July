// 2697. Sum in a Matrix



// You are given a 0-indexed 2D integer array nums. Initially, your score is 0. Perform the following operations until the matrix becomes empty:

// From each row in the matrix, select the largest number and remove it. In the case of a tie, it does not matter which number is chosen.
// Identify the highest number amongst all those removed in step 1. Add that number to your score.
// Return the final score.





/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    
    //sort the sub arrays 
        for(let i = 0; i < nums.length;i++){
         nums[i].sort((a,b)=> a-b)   
            
        }
      
        // sum var
        let sum = 0
              
        //look at each sub array 
        for(let i = 0; i < nums[0].length; i++){
            // max var
            let maxi = 0
            //    look at each number in the subarr
            for(let j = 0; j < nums.length;j++){
                //update the max with that sum
                maxi = Math.max(nums[j][i],maxi)
            }
            // update sum with max
            sum += maxi
        }
        
        // return sum
        return sum
    };