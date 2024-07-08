function basketballEquipment(input){
let shoes = Number(input[0]) - (Number(input[0])* 0.4);
let ekip = shoes - (shoes * 0.20);
let topka = 0.25 * ekip;
let aksesoari = 0.2 * topka;
let razhodi = shoes + ekip + topka + aksesoari + Number(input[0]);
console.log(razhodi);
}
basketballEquipment(["365"]);
