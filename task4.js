function knigi(input){
let broiStranici = Number(input[0]);
let straniciZaChas = Number(input[1]);
let broiDni = Number(input[2]);
let obshtoVremeZaChetene = broiStranici / straniciZaChas;
let neobhodimiChasove = obshtoVremeZaChetene / broiDni;
console.log(neobhodimiChasove);
}
knigi(["432","15","4"]);


