function pluvane(input){
let worldRecord = Number(input[0]);
let distInMetres = Number(input[1]);
let secPerMetres = Number(input[2]);
let distance = distInMetres * secPerMetres;

let abscence = Math.floor(distInMetres/15) * 12.5;


let run = distance + abscence;
let a = run - worldRecord;
if(run > worldRecord){
    console.log(`No, he failed! He was ${a.toFixed(2)} seconds slower.`);
}
else {
    console.log(`Yes, he succeeded! The new world record is ${run.toFixed(2)} seconds.`);
}
}
pluvane(["55555.67","3017","5.03"]);