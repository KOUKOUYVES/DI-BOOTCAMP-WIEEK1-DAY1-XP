///////////////////////////////////exercice1//////////////////////////////////////////////////////////
let numeroTableau = [123, 8409, 100053, 333333333, 7];

for (let element of numeroTableau) {
  if (element % 3 == 0) {
    console.log(element + " is divisible by three");
  } else {
    console.log(element + " is not divisible by three");
  }
}

//////////////////////////////////////////exercice2/////////////////////////////////////////////////////
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let nomEtudiant = prompt("svp entrer votre nom");

if (nomEtudiant in guestList) {
    console.log("Hi ! I'm " + nomEtudiant + " is in " + guestList[nomEtudiant]);
}else {
    console.log("Hi ! I'm a guest.")
}

///////////////////////////////exercie3//////////////////////////////////////////

let age = [20,5,12,43,98,55];

let sommeAge = 0;
let tailleAge= 0;

for (let i = 0; i < age.length; i++) {
    sommeAge += age[i];
    if (age[i] > tailleAge) {
        tailleAge = age[i];
    }
}
console.log("the add of All years is " + sommeAge);
console.log("the Old years of All years is " + tailleAge);