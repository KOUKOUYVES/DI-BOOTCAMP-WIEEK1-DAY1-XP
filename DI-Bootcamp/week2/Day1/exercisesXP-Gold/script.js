///////////////////////////////////exercice 1///////////////////////////////////////////////////
  let sentence = ["my","favorite","color","is","blue"];
  let secondSentence = sentence.join();
  
  console.log(secondSentence);
  
///////////////////////////////////exercice 2///////////////////////////////////////////////////
    
  let firstVariable = "Yves";
  let secondVariable = "Armand";
  
  console.log(firstVariable.slice(0,2));
  console.log(secondVariable.slice(0,2));
  
  let thirdVarible = firstVariable.concat(secondVariable)
  console.log(thirdVarible);
  
///////////////////////////////////exercice 3///////////////////////////////////////////////////

  let num1 = prompt("Entrer un premier numéro");
  console.log(typeof(num1));
  let num2 = prompt("Entrer un second numéro");
  sum = parseInt(num1) + parseInt(num2);
  alert(sum);

  sub = parseInt(num1) - parseInt(num2);
  alert(sub);
  // multiplication
  multi = parseInt(num1) * parseInt(num2);
  alert(multi);
  // division
  div = parseInt(num1) / parseInt(num2);
  alert(div);
  