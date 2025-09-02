function chunkArrayInGroups(arr,num){
  let res=[];
  for(let i=0;i<arr.length;i+=num){
    res.push(arr.slice(i,i+num));
  }
  return res;
}
