// function addTwoNums(a,b){
//     try{
//         if(typeof(a)!='Number')
//             throw new ReferenceError("the first argument is not a number");
//         else if(typeof(b)!='Number')
//           throw new ReferenceError("the second argument is not a number");
//         else
//             console.log(a+b)
//     }
//     catch(errorsinjs)
//     {
//         console.log("error!", errorsinjs)

//     }
// }
// addTwoNums("5","5");
// console.log("It still works")


//its working code above code is not working but
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")