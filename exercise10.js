function bandingkanAngka(angka1, angka2) {
  var answer = true;
  if(angka2 > angka1){
    answer = true;
  }else if(angka2 < angka1){
      answer = false;
  }else{
    answer = -1;
  }
  return answer;
}

console.log(bandingkanAngka(5, 8)); 
console.log(bandingkanAngka(5, 3)); 
console.log(bandingkanAngka(4, 4)); 
console.log(bandingkanAngka(3, 3)); 
console.log(bandingkanAngka(17, 2)); 