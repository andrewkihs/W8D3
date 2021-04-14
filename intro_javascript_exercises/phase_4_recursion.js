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

function exponent_v1(base, exp){
  if(exp == 0){
    return 1;
  }
  return base * exponent(base, exp-1);
}

function exponent_v2(base, exp){
  if (exp == 0){
    return 1;
  } 
  if (exp == 1){
    return base;
  }
  if (exp % 2 == 0){
    return (exponent_v2(base, exp / 2) ** 2);
  } else {     
    return base * (exponent_v2(base, (exp - 1) / 2) ** 2);
  }
}
function fibonacci(n){
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
  if (n == 1){ return [0]; }
  if (n == 2){ return [0, 1]; }

  let fibArr = fibonacci(n-1);
  fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
  return fibArr; 
}


function deepDup(arr){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] instanceof Array){
      arr[i] = deepDup(arr[i]);
    }
  }
  return arr;
}
