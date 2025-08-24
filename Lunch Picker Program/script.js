let lunches=[]
function addLunchToEnd(lunches,lunchItem){
  lunches.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunches;
}
function addLunchToStart(lunches,lunchItem){
  lunches.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunches;
}
function removeLastLunch(lunches){
  if(lunches.length==0){
    console.log("No lunches to remove.");
    return lunches;
  }
  console.log(`${lunches.pop()} removed from the end of the lunch menu.`);
  return lunches;
}
function removeFirstLunch(lunches){
  if(lunches.length==0){
    console.log("No lunches to remove.");
    return lunches;
  }
  console.log(`${lunches.shift()} removed from the start of the lunch menu.`);
  return lunches;
}
function getRandomLunch(lunches){
  if(lunches.length==0){
    console.log("No lunches available.")
  }
  else{
    let lunchItem=lunches[Math.round(Math.random()*((lunches.length)-1))];
    console.log(`Randomly selected lunch: ${lunchItem}`)
  }
}
function showLunchMenu(lunches){
  if(lunches.length==0){
    console.log("The menu is empty.")
  }
  else{
    console.log(`Menu items: ${lunches.join(", ")}`)
  }
}