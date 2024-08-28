function lettrfindr(word,lettr)
{
  for(var i=0;i<word.length;i++)
  {
    if(word[i]==lettr)
    {
        // console.log($(lettr) "found at" $(i))
        console.log(lettr +" found at "+ i)
    }
    else{
        // console.log("letter not present")
    }
  }
}
lettrfindr("gajraj","j");