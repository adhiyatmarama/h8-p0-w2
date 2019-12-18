console.log('============== soal 1 ==============')
// Melakukan Looping Menggunakan While

var count = 0;
console.log('Looping pertama')
while(count < 20){
  count += 2;
  console.log(count + ' - I love coding');
}
console.log(" ")

console.log('Looping kedua')
while(count > 0){
  console.log(count + ' - I love coding');  
  count -= 2;
}
console.log(" ")

console.log('============== soal 2 ==============')
// Melakukan Looping Menggunakan For

console.log('Looping pertama')
for(var i=1; i<=20; i++){
  console.log(i + ' - I love coding');
}
console.log(" ");
console.log('Looping Kedua')
for(var i=20; i>=1; i--){
  console.log(i + ' - I love coding');
}
console.log(" ");

console.log('============== soal 3 ==============')
//Angka Ganjil dan Genap

console.log("Ganjil/Genap")
for(var counter = 1; counter<=100; counter++){
  if(counter % 2 == 0) {
    console.log(counter + " angka genap");
  }else{
    console.log(counter + " angka ganjil");
  }
}
console.log(" ");

console.log("Kelipatan 3")
for(var counter = 1; counter<=100; counter+=2){
  if(counter % 3 == 0) {
    console.log(counter + " kelipatan 3");
  }
}
console.log(" ");

console.log("Kelipatan 6")
for(var counter = 1; counter<=100; counter+=5){
  if(counter % 6 == 0) {
    console.log(counter + " kelipatan 6");
  }
}
console.log(" ");

console.log("Kelipatan 10")
for(var counter = 1; counter<=100; counter+=9){
  if(counter % 10 == 0) {
    console.log(counter + " kelipatan 10");
  }
}
console.log(" ");
