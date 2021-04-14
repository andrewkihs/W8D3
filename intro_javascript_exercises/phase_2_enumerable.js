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

Array.prototype.myReduce = function(callback2, initialValue){
    let copyArr = this.slice(0,this.length);

    if(!initialValue){
      initialValue = copyArr.shift();
    }

    copyArr.myEach(function(el){ 
      initialValue = callback2(initialValue, el) 
    });
    return initialValue;
}

function callback2(acc , el){
  return acc + el;
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


