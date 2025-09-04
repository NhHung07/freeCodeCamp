function pyramid(char,rows,isDown){
  let res="\n";

  for(let i=0;i<rows;i++){

    let level = isDown ? rows-i-1:i;
    let numSpaces = rows-level-1;
    let numChars =  2*level+1;
    
    res += " ".repeat(numSpaces)+char.repeat(numChars)+"\n";
  }

  return res;
}
