  ////////////////////////////////////////////////////exercice 1//////////////////////////////////////////////////////////

let person1 = {
    lastName: "John",
    firstName: "Sally",
    height: 1.7,
    mass: 80,
    IMC: function () {
      let imc = person1.mass / (person1.height * person1.height);
      return imc;
    },
  };
  
  let person2 = {
    lastName: "Smith",
    firstName: "John",
    height: 1.8,
    mass: 80,
    IMC: function () {
      let imc = person2.mass / (person2.height * person2.height);
      return imc;
    },
  };
  
  function compareIMC(imc1, imc2) {
    if (imc1.IMC < imc2.IMC) {
      return imc2.lastName + " " + imc2.firstName + " has a big IMC";
    } else {
      return imc1.lastName + " " + imc1.firstName + " has a big IMC";
    }
  }
  
  console.log(compareIMC(person1, person2));
  
  ////////////////////////////////////////////////////exercice 2//////////////////////////////////////////////////////////
  
  function findAvg(gradesList) {
    if (gradesList.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
    }
    let result = sum / gradesList.length;
    if (result < 65) {
      return "your result : " + result + " is failed and must repeat the course.";
    } else {
      return "Congratulation ! your result : " + result + " is passed.";
    }
  }
  
  console.log(findAvg([100, 123, 2323]));