function getIndexToIns(arr,num){
  arr.sort((a,b) => a-b);
  let index = arr.findIndex(el => num <= el);
  if(index==arr.length){
    return arr.length;
  }
  return index;
}

