function konversiMenit(menit) {
    var c = 0;
    var sisa = 0;
    while(menit>0){
      if(menit >= 60){
        c += 1;
        menit -= 60;
      }else{
        sisa = menit;
        menit = 0;
      }
    }
    if (sisa>=10){
      var answer = `${c}:${sisa}`;
    }else{
      var answer = `${c}:0${sisa}`
    }
    return answer;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  