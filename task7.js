function delivery(input){
let pileshko = Number(input[0]) * 10.35;
let riba = Number(input[1]) * 12.40;
let veggie = Number(input[2]) * 8.15;
let dostavka = 2.50;
let cenaBezdostavka = pileshko + riba + veggie 
let desert = cenaBezdostavka * 0.2;
let porychka = pileshko + riba + veggie + desert + dostavka;
console.log(porychka);
}
delivery(["9","2","6"]);