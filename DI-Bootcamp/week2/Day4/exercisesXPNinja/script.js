/////////////////////////////////////////////exercice 1//////////////////////////////////////////////////////

const RandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    let evenNumber = [];
    let j = 0;
    for (let i = 0; i < randomNumber; i++) {
      if (i % 2 == 0) {
        evenNumber[j] = i;
        j++;
      }
    }
    console.log(evenNumber);
  }
  
  RandomNumber();
  
 /////////////////////////////////////////////exercice 3//////////////////////////////////////////////////////

  const capitalize = (word) => {
    let tabWord = word.split("");
    let tabWordEven = [];
    let tabWordAdd = [];
    for (let i = 0; i < tabWord.length; i++) {
      if (i % 2 == 0 || i == 0) {
        tabWordEven[i] = tabWord[i].toUpperCase();
      } else {
        tabWordEven[i] = tabWord[i].toLowerCase();
      }
      if (i % 2 == 0 || i == 0) {
        tabWordAdd[i] = tabWord[i].toLowerCase();
      } else {
        tabWordAdd[i] = tabWord[i].toUpperCase();
      }
    }
    tabWord = [tabWordAdd.join(""), tabWordEven.join("")];
    return tabWord;
  }
  
  console.log(capitalize("hello"));
  
 /////////////////////////////////////////////exercice 3//////////////////////////////////////////////////////

  
  const isPalindrome = (word) => {
    let reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isPalindrome("madam"));
  
 /////////////////////////////////////////////exercice 4//////////////////////////////////////////////////////

  const biggestNumberInArray = (arrayNumber) => {
    let biggestNumber = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      if (isNaN(arrayNumber[i])) {
        continue;
      }
      if (arrayNumber[i] > biggestNumber) {
        biggestNumber = arrayNumber[i];
      }
    }
    return biggestNumber;
  }
  
  console.log(biggestNumberInArray(["a", 3, "n", 4, 2, "c", 10]));
  
  /////////////////////////////////////////////exercice 5//////////////////////////////////////////////////////
  
  const uniqueElements = (array) => {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] != array[i + 1]) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  
  console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5]));