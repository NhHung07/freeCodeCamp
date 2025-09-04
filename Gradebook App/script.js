function getAverage(scores){
  let cnt=0;
  let sum=0;
  for(let i=0;i<scores.length;i++){
    cnt++;
    sum+=scores[i];
  }
  return sum/cnt;
}

function getGrade(score){
  if(score==100){
    return "A+";
  }
  else if(score>=90){
    return "A";
  }
  else if(score>=80){
    return "B";
  }
  else if(score>=70){
    return "C";
  }
  else if(score>=60){
    return "D";
  }
  else{
    return "F";
  }
}

function hasPassingGrade(score){
  if(getGrade(score)=="F"){
    return false;
  }
  return true;
}

function studentMsg(scores,studentScore){
  if(!hasPassingGrade(studentScore)){
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
  }
  return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
}



