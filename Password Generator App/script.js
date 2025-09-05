function generatePassword(length){
  let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let res="";
  for(let i=0;i<length;i++){
    res+=chars[Math.floor(Math.random()*chars.length)];
  }
  return res;
}

let password=generatePassword(7);
console.log(`Generated password: ${password}`);