function range(start, end){
  if(start == end){
    return [start];
  }

  const retArr = range(start, end-1);
  retArr.push(end);
  return retArr;
}


function sumRec(arr) {
  if(arr.length == 1){
    return arr[0];
  }

  let sum = arr.pop();
  sum += sumRec(arr);
  return sum;
}

function exponent(base, exp){
  if(exp == 0){
    return 1;
  }
  return base * exponent(base, exp-1);
}
// function fibonacci(n)
// function deepDup(arr) 

