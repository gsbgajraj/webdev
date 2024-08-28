try{
    throw new ReferenceError();
}
catch(err){
    console.log(err)
    console("there is an reference error")
}
console.log("program still running")