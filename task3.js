function deposit(input){
let depoziranaSuma = Number(input[0]);
let srokDepozit = Number(input[1]);
let godishenProcent = Number(input[2]/100);
let sumaDepozit = depoziranaSuma + srokDepozit * ((depoziranaSuma*godishenProcent)/12);
console.log(sumaDepozit);
}
deposit(["2350","6","7"]);