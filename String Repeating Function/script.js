function repeatStringNumTimes(str,num){
  let res="";

  if(num<=0){
    return res;
  }

  for(let i=0;i<num;i++){
    res+=str;
  }

  return res;
}