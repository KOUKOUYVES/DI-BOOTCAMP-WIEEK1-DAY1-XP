let x = 20;
let y = 35;
let somme = x + y;

////////////////////////////////////////////Exercice1//////////////////////////////////////////////////////////////////;
if (x>y) {
    console.log(x + " est le plus grand nombre");
} else {
    console.log(y + " est le plus grand nombre");
}

////////////////////////////////////////////Exercice2//////////////////////////////////////////////////////////////////;
let newDogdont  = "Chihuahua";
let aimer ="J'adore les chihuahuas, c'est ma race de chien préférée";
let nonAimer ="Je m'en fous, je préfère les chats";

console.log(newDogdont.length);
console.log(newDogdont.toUpperCase());
console.log(newDogdont.toLowerCase());
console.log(newDogdont);

if (newDogdont = newDogdont) {
    console.log(aimer);
} else {
    console.log(nonAimer);
}

////////////////////////////////////////////Exercice3//////////////////////////////////////////////////////////////////;

let entreNombre = prompt("entrer un nombre")
console.log(entreNombre);

            if(entreNombre%2 == 0)
              {
                     alert(entreNombre  +" est un nombre pair");
              }
              else
              {
                     alert(entreNombre  + " est un nombre impair");
              }

////////////////////////////////////////////Exercice4//////////////////////////////////////////////////////////////////;
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length==0) {
    console.log("personne n'est en ligne");
} else if (users.length==1) {
    console.log(users[0] + " is online ");
}else if (users.length ===2) {
    console.log(users[0] && users[1] + "are online ");
} else {
    console.log(users[0], users[1],users[2] &&  users.length - 1 + " more online");
}