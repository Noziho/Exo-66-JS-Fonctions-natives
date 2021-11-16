let operande = 10;
let entier = document.getElementById("entier");
entier.innerHTML = parseInt(entier.innerHTML) * operande;

let flottant = document.getElementById("flottant");
flottant.innerHTML = parseFloat(flottant.innerHTML) * operande + parseInt(entier.innerHTML);

let nonNumerique = document.getElementById("non-numerique");

if (isNaN(nonNumerique)){
    nonNumerique.innerHTML = "0"
}

let alea = document.getElementById("random");
alea.innerHTML = Math.random();

let trunc = document.getElementById("trunc");
trunc.innerHTML = Math.trunc(trunc.innerHTML);

let replace = document.getElementById("replace");
replace.innerHTML = replace.innerHTML.replace("world", "Noah Decroix");