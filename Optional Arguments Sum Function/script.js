function addTogether(num1,num2){
  function isNum(num){
    return typeof num === "number";
  }
  if(arguments.length==2){
    if(isNum(num1)&&isNum(num2)){
      return num1+num2;
    }
    else{
      return undefined;
    }
  }
  if(arguments.length==1&&isNum(num1)){
    return function(num3){
      if(isNum(num3)){
        return num1+num3;
      }
      return undefined;
    }
  }
  return undefined;
}


