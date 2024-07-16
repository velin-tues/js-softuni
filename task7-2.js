function shopping(input){
let budget = Number(input[0]);
let videokarti = Number(input[1]); 
let procesori = Number(input[2]);
let ramPameti = Number(input[3]);
let n = videokarti * 250;
let m = 0.35 * n * procesori;
let p = 0.1 * n * ramPameti;
let suma = n + m + p;
let ostatyk = 0;
if(videokarti > procesori){
    suma = suma - (0.15 * suma)
    if(suma > budget){
        ostatyk = suma - budget;
        console.log(`Not enough money! You need ${ostatyk.toFixed(2)} leva more!`);
    }
    else{
        ostatyk = budget - suma;
        console.log(`You have ${ostatyk.toFixed(2)} leva left!`);
    }
}
if(suma > budget){
        ostatyk = suma - budget;
        console.log(`Not enough money! You need ${ostatyk.toFixed(2)} leva more!`);
    }
else{
        ostatyk = budget - suma;
        console.log(`You have ${ostatyk.toFixed(2)} leva left!`);
}
 
}
shopping(["920.45","3","1","1"]);