function largestOfAll(arr){
  let res=[];
  for(let i=0;i<arr.length;i++){
    let maxVal=arr[i][0];
    for(let k=0;k<arr[i].length;k++){
      maxVal=Math.max(maxVal,arr[i][k]);
    }
    res.push(maxVal);
  }
  return res;
}

