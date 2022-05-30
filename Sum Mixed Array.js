function sumMix(x){
  //I use array method reduce(), because it simple to accomulate sum of all elements, to make a number out of a string I use parseInt()
  return x.reduce((summ, curr)=>parseInt(summ)+parseInt(curr))
}
