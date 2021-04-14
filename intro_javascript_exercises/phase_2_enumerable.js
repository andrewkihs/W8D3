Array.prototype.myEach = function(callback){
  for(let i=0; i<this.length; i++){
    this[i] = callback(this[i]);
  }
  return this;
}

function callback(num) {
  return num * 2;
}