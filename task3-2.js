function shop(input){
let trip = Number(input[0]);
let pyzeli = Number(input[1]);
let govoreshtiKukli = Number(input[2]);
let plusheniMecheta = Number(input[3]);
let minioni = Number(input[4]);
let kamioncheta = Number(input[5]);
let pechelba = 0;
let left = 0;
let b = 0;

let suma = (pyzeli * 2.60) + (govoreshtiKukli * 3) + (plusheniMecheta * 4.10) + (minioni * 8.20) + (kamioncheta * 2);
let broi = pyzeli + govoreshtiKukli + plusheniMecheta + minioni + kamioncheta;
if(broi > 50){
    suma = suma - (0.25 * suma);
}
pechelba = suma - (0.1 * suma);
left = pechelba - trip;
if(pechelba > trip){
    
    console.log(`Yes! ${left.toFixed(2)} lv left.`);
}
else{
    b = trip - pechelba;
    console.log(`Not enough money! ${b.toFixed(2)} lv needed.`);
}

}
shop(["320","8","2","5","5","1"]);


