function xo(str) {
    var a = 0;
    var b = 0;
    for(i=0; i<str.length; i++){
      if(str[i] === 'o'){
        a += 1;
      }
      if(str[i] === 'x'){
        b += 1;
      }
    }
    if (a === b){
      var answer = true;
    }else {
      var answer = false;
    }
    return answer;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true