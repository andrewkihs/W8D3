Array.prototype.myEach = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback){
  const retArr = [];
  
  this.myEach(function(el) {
    retArr.push(callback(el));
  });
  return retArr;
}



function print_callback(num) {
  console.log(num);
}

function callback(num) {
  // console.log('hit callback');
  return (num * 2);
}

arr = [1,2,3,4];
// arr.myEach(callback);
console.log(arr.myMap(callback));


