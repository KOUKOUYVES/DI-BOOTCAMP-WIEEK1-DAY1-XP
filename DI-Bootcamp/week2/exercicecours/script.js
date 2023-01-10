
let nom="kouakou ";
let text ="hfh";
let prenom ="kouassi yves armand";
let adresseNuméro="I live in ";
let colors = ["blue", "yellow", "green"]; 
let rueAdresse="BenYehuda 5, ";
let campagne="in Israel";
let anneNaissance=1996 ;
let anneFuture=2050 ;
let ageFuture=anneFuture - anneNaissance ;
let phraseAffiche="j'aurais " + ageFuture +" en "+ anneFuture;
let globalAddress=adresseNuméro + rueAdresse + campagne;//global variable
let tableau = ["blue", "yellow", "green","fhffhhffhfh"];
let division = tableau.slice(2);

    /*function a(){  
    alert(globalAddress);  
    }   
    a();

    function b(){  
    alert(phraseAffiche);  
    }   
    b();*/
console.log(typeof(colors)) // object
console.log(phraseAffiche);
console.log(globalAddress);
console.log(nom.toUpperCase() + prenom);
console.log(text.indexOf("h"));
//tableau.pop();

console.log(division);
console.log(tableau);

