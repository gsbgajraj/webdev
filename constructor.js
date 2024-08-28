// camel notation : oneTwoThreeFour
// pascal notation : OneTwoThree 

function createCircle(radius){
    return{
        radius,
        draw(){
            console.log("draw");
        }
    };
}
