console.log('================= Tugas 1 ==================');

function shoutOut(){
  return "Halo Function!";
}
console.log(shoutOut())
console.log(" ")

console.log('================= Tugas 2 ==================');

function calculateMultiply(a,b){
  return a*b;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); 
console.log(" ");

console.log('================= Tugas 3 ==================');

function processSentence(name,age,address,hobby){
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}
var nama = 'Rama';
var umur = 21;
var alamat = 'Jalan Pandanwangi 3, Tangerang';
var hobi = 'Futsal';

var fullsentence = processSentence(nama, umur, alamat, hobi);
console.log(fullsentence);