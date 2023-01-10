
/////////////////////////////////////////Exercice 1 ////////////////////////////////////////////////////////

let nourriturePreferee = "Foutou igname avec sauce djumpklé ";
let repasPrefereeJournee =["café","garba","riz avec sauce "];

let favorite = repasPrefereeJournee[1];
console.log("I eat " + nourriturePreferee + "at every " + favorite);/**I eat Foutou igname avec sauce djumpklé at every garba */

/////////////////////////////////////////Exercice 2 ////////////////////////////////////////////////////////
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesSentence ="casa de papel, 24 chrono, prison breack";
let myWatchedSeriesLength = myWatchedSeries.length;
let lengthSentence ="I watched " +myWatchedSeriesLength+ " series :" + myWatchedSeriesSentence;

let modification = myWatchedSeries[2] = "freinds";
let ajouter =myWatchedSeries.push("the badlans");
let ajoutDebut = myWatchedSeries.unshift("ma famille");
let suppression  = myWatchedSeries.splice(1,1);

console.log(myWatchedSeries);/**['black mirror', 'money heist', 'the big bang theory'] */
console.log(modification);/**['black mirror', 'money heist', 'freinds'] */
console.log(ajouter);/**['black mirror', 'money heist', 'freinds', 'the badlans'] */
console.log(ajoutDebut);/**['ma famille', 'black mirror', 'money heist', 'freinds', 'the badlans'] */
console.log(suppression);/**['ma famille', 'money heist', 'freinds', 'the badlans'] */ /**suppression de black mirror */
console.log(myWatchedSeries);


/////////////////////////////////////////Exercice 3 ////////////////////////////////////////////////////////
let temperature = 45;
let fahrenheit = (temperature *9/5)+ 32;
console.log(fahrenheit);

/////////////////////////////////////////Exercice 4 ////////////////////////////////////////////////////////
	let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: la sortie sera 55 car il additionne deux entier
    // Actual: 55

    a = 2;
    console.log(a+b) //second expression
    // Prediction: la sortie sera 23 car il recupere la valeur de a qui es en haut e additionne a b 
    // Actual: 23


	//e résultat de a + bdans la première expression est 55
	//e résultat de a + b dans la première expression 2
	//e résultat de c dans la première expression est Undefined 

	console.log(3 + 4 + '5');// le resultat de ce code sera 75 car en premiere position il additionne 3+4 et ensuite il concatene avec 5

/////////////////////////////////////////Exercice 5 ////////////////////////////////////////////////////////

typeof(15)
// Prediction: number 
// Actual: number

typeof(5.5)
// Prediction: number
// Actual:

typeof(NaN)
// Prediction:Undefined
// Actual:

typeof("hello")
// Prediction: string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:boolean
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburger s
// Actual:"hamburgers

"hamburgers" - "s"
// Prediction:NAN
// Actual:NAN

"1" + "3"
// Prediction:13 car il concatene 1 et 3
// Actual:13

"1" - "3"
// Prediction:1-3
// Actual:-2

"johnny" + 5
// Prediction:johnny5 car il concaterne johnny et 5
// Actual:

"johnny" - 5
// Prediction: NAN 
// Actual:

99 * "hello"
// Prediction:99hello
// Actual:NAN

1 != 1
// Prediction:false parce que 1 n'est pas deifferent de 1
// Actual:

1 == "1"
// Prediction:true 
// Actual:true 

1 === "1"
// Prediction:true
// Actual:false

/////////////////////////////////////////Exercice 6 ////////////////////////////////////////////////////////

5 + "34"
// Prediction:534
// Actual:'534'

5 - "4"
// Prediction:1
// Actual:0

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:2
// Actual:5

"Java" + "Script"
// Prediction:JavaScript
// Actual:

" " + " "
// Prediction:undefined
// Actual:

" " + 0
// Prediction:0
// Actual:'0'

true + true
// Prediction:2
// Actual:2

true + false
// Prediction:true
// Actual:1

false + true
// Prediction:0
// Actual:1

false - true
// Prediction:1
// Actual:-1

!true
// Prediction:1
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:Bob-bill
// Actual:nan