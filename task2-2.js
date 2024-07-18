function bonus(input){
let a = Number(input[0]);
let bonusTochki = 0;
if (a < 100){
    bonusTochki = bonusTochki + 5;
}
else if(a > 100){
    bonusTochki = bonusTochki + (0.2 * a);
}
else if(a > 1000){
    bonusTochki = bonusTochki + (0.1 * a);
}
else{
    console.log("Enter a valid number");
}
if(a%2===0){
    bonusTochki = bonusTochki + 1;
}
if(a%10===5){
    bonusTochki = bonusTochki + 2;
}
let b = a + bonusTochki;
console.log(`The bonus points are ${bonusTochki}`);
console.log(`The points are ${b}`);
}
bonus(["175"])