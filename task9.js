function fishTank(input){
let dyljina = Number(input[0]);
let shirochina = Number(input[1]);
let visochina = Number(input[2]);
let procent = Number(input[3]) / 100;
let obem = dyljina * shirochina * visochina;
let obemVLitri = obem / 1000;
let nujniLitri = obemVLitri * (1 - procent); 
console.log(nujniLitri);
}
fishTank(["85","75","47","17"]);