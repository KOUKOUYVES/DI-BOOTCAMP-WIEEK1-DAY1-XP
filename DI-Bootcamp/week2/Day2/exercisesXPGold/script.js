////////////////////////////////////////exercice 1////////////////////////////////////////

let language = prompt("svp quelle lang?");

let  minisculeLanguage = language.toLowerCase();

switch (language) {
  case "french":
    console.log("Bonjour")
    break;
  case "english":
    console.log("Hello")
    break;
    case "hebrew":
    console.log("Shalom")
    break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001")
}


////////////////////////////////////////exercice 2////////////////////////////////////////
let grade = parseInt(prompt("What is your grade ?"));

if (grade > 90) {
    console.log("A")
}else if(grade > 80 && grade <= 90 ){
    console.log("B")
}else if(grade >= 70 && grade<= 80){
    console.log("C")
}else{
    console.log("D")
}

////////////////////////////////////////exercice 3////////////////////////////////////////
let verb = prompt("What is your verb?");

verb = verb.toLowerCase();

if (verb.length >= 3 && verb.endsWith("ing") == false) {
    console.log(`${verb}ing`)
}else if (verb.length >= 3 && verb.endsWith("ing") == true ){
    console.log(`${verb}ly`)
}else{
    console.log(`${verb}`)
}