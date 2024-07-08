function repainting(input){
let nailon = Number(input[0]) * 1.50 + (2 * 1.50);
let boq = (Number(input[1])+ (Number(input[1] * 0.1))) * 14.50
let razreditel = Number(input[2]) * 5;
let torbichki = 0.40;
let chasoveRabota = Number(input[3]) * (0.3 * (nailon + boq + razreditel + torbichki));
let razhodi = nailon + boq + razreditel + chasoveRabota + torbichki;
console.log(razhodi);
}
repainting(["10","11","4","8"]);


