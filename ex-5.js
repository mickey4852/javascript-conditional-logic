function calculateStudentGrade(score) {
  // Start coding here
  let result;
  if (score <= 59) {
    result = "F";
  } else if (score <= 69) {
    result = "D";
  } else if (score <= 79) {
    result = "C";
  } else if (score <= 89) {
    result = "B";
  } else if (score <= 100) {
    result = "A";
  } else {
    result = "F";
  }
  return result;
  }


// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
