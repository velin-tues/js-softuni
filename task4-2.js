function sredstva(input){
let budget = Number(input[0]);
let dekor = budget * 0.1;
let statisti = Number(input[1]);
let oblekloStatist = Number(input[2]);
let a = 0;
if(statisti > 150){
    oblekloStatist = oblekloStatist - (oblekloStatist * 0.1)
}
let cenaObleklo = oblekloStatist * statisti;
let suma = cenaObleklo + dekor;

if(budget < suma){
    a = suma - budget;
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${a.toFixed(2)} leva more.`);
}
else{ 
    a = budget - suma;
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${a.toFixed(2)} leva left.`);
}
}
sredstva(["9587.88","222","55.68"]);