function findLongestWordLength(sentence){
  const word=sentence.split(" ");
  let res=0;
  for(let i=0;i<word.length;i++){
    res=Math.max(res,word[i].length)
  }
  return res;
}