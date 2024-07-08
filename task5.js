function schoolSuplies(input){
let paketHimikali = Number(input[0]) * 5.80;
let paketMarkeri = Number(input[1]) * 7.20;
let preparat = Number(input[2]) * 1.20;
let promociq = Number(input[3]) / 100;
let suma = paketHimikali + paketMarkeri + preparat;
let sumaSPromociq = suma - (suma * promociq);
console.log(sumaSPromociq);
}
schoolSuplies(["4","2","5","13"]);


