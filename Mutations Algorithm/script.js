function mutation(arr){
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  for(let char of str2){
    if(!str1.includes(char)){
      return false;
    }
  }
  return true;
} 

