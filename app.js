let operande = 10;

let entier = "32";
let resultEntier;

let flottant = "54.85";
let resultFlottant;

let nonNumerique = "Vous y arriverez";
let resultNonNumerique;

resultEntier = document.getElementById("entier").innerHTML = Number.parseInt(entier) * operande;
resultFlottant = document.getElementById("flottant").innerHTML = Number.parseFloat(flottant) * operande + 320;

if (isNaN(nonNumerique)) {
    resultNonNumerique = document.getElementById("non-numerique").innerHTML = "0";
}

let random = document.getElementById("random").innerHTML = Math.random();

let trunc = "54.988";
let resultTrunc;

resultTrunc = document.getElementById("trunc").innerHTML = Math.trunc(trunc);

let replace = "Hello World !"
let resultReplace;
resultReplace = document.getElementById("replace").innerHTML = replace.replace("Hello World !", "Decroix Noah");




