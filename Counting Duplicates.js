function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length
  }

//second SOLUTION
const duplicateCount = (text) => {
    let str = text.toLowerCase().split('').sort(); 
    let arr = []
    for(i = 0; i < str.length; i++){
       if(str[i] === str[i + 1] && !arr.includes(str[i])){
           arr.push(str[i])
       }
    }
    return arr.length
