const even= num=> {
    if(num%2==0)
    console.log("it is a even number");
} 
even(4);

const odd= (num1,num2)=>{
    if(num1%2==0 || num2%2==0)
    {
        console.log("either of one is even number");
    }
    else
    {
        console.log("none of them is even")
    }
}
odd(34,34)
odd(33,31)
console.log(document)