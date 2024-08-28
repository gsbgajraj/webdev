class Solution {
    sumElement(arr,n) {
        var sum=0;
        for(var i=0;i<n;i++)
        {
        sum+=arr[i];
        }
        return sum;
    }
  }
  var Arr=[3,2,1];
  var N=Arr.length;
  var result=new Solution;
  console.log(result.sumElement(Arr,N));
  console.log(Arr.length);

// var arr=[1,2,3,4,5,6,7];
// var sum=0;
// for(var i=0;i<arr.length;i++)
// {
//    sum+=arr[i];
// }
// console.log(sum);


// var arr=[1,2,3,4,5,6,7];
// var summ=0;
// function sum(arr){
// for(var i=0;i<arr.length;i++)
// {
//    summ+=arr[i];
// }
//   return summ;
// }
// console.log(sum(arr));


// var arr = [1, 2, 3, 4, 5, 6, 7];
// var summ = 0;

// function sum(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     summ += arr[i];
//   }
//   return summ; // Add the return statement here to return the sum
// }

// console.log(sum(arr)); // Call the function and log the result
