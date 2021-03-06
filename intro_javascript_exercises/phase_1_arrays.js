Array.prototype.uniq = function() {
  const retArr = [];
  for(let i = 0; i < this.length; i++){
    if (!retArr.includes(this[i])){
      retArr.push(this[i]);
    }
  }
  return retArr;
}

Array.prototype.twoSum = function() {
  const retArr = [];
  for(let i = 0; i < this.length; i++){
    for(let j = i+1; j < this.length; j++){
      let subArr = [];
      if (this[i] + this[j] == 0){
        subArr.push(i, j);
        retArr.push(subArr);
      }
    }
  }
  // console.log(retArr);
  return retArr;
}


Array.prototype.transpose = function(){
  const retArr = [];

  for(let i = 0; i < this.length; i++){
    let subArr = [];
    for(let j = 0; j < this[0].length; j++){
      subArr.push(this[j][i]); 
    }
    retArr.push(subArr);
  }
  return retArr;
}



