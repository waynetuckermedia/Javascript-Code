// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// let arr = [5,3,8,1];

function filterRangeInPlace(arr, a, b) {

    for(let i = 0; i < arr.length; i++){
        let value = arr[i];

    if(value < a || value > b){
    arr.splice(i, 1)
    i--;
   
    }
    console.log('test', arr)
}

}
filterRangeInPlace([3, 4, 5, 6, 7, 8, 9] , 5, 7)

