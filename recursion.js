var num=prompt("enter a number");
fact=1;
factr=(n)=>{
    if(n>num)
    {
        return;
    }
    var tmp=fact;
    fact=fact*n;
    n++;
    fact(n);
}
 
console.log(num);