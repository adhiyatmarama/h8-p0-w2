console.log("================ soal 1 ================");
// Menyusun Barisan Bintang
var row1 = 7;
for(var i=0; i<row1; i++){
  console.log("*");
}
console.log(" ")

console.log("================ soal 2 ================");
// Menyusun Barisan Bintang Dengan Nested Looping
var row2 =4;
var str ="";
for(var i=0; i<row2; i++){
  for(var j=0; j<row2; j++){
    str += "*"
  }
  console.log(str);
  str = "";
}
console.log(" ")

console.log("================ soal 3 ================");
// Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 =5;
var str ="";
for(var i=0; i<row3; i++){
  for(var j=0; j<=i; j++){
    str += "*"
  }
  console.log(str);
  str = "";
}
console.log(" ")
