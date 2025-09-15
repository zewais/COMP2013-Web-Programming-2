/* 
Course: COMP2004
Author: Ziad Ewais
Title: COMP2004-Week1-JS-Review-Answers
Synopsis: Welcome to week 1 of COMP2004 - Full Stack Dev.
To start on the right foot we need to review the JavaScript
required to develop in React. 
*/

/*
*1
JavaScript Objects are a collection data structure where data are defined by "Key" and "Value"
Keys are a string followed by a colon (:)
Values can be any JavaScript data type (String, number, boolean, collection, ...)
*/
let data = [
  {
    id: 1,
    studentName: "John Doe",
    dateOfBirth: "2002-05-11",
    tuitionPaid: 12600,
    program: "General Arts and Science",
    highSchool: "West Andrews HS",
    courses: ["MATH8", "CHEM12", "COMP205", "COMM110", "GENE200"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 95,
      GENE101: 66,
      CHEM11: 85,
      COMM20: 0,
    },
  },
  {
    id: 22,
    studentName: "Shrey Gupta",
    dateOfBirth: "2003-11-23",
    tuitionPaid: 10200,
    program: "Welding",
    highSchool: "Toronto Heights HS",
    courses: ["MATH8", "WELD12", "WELD205", "CARP55", "GENE101"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 78,
      WELD101: 86,
      PHYS20: 55,
      COMM20: null,
    },
  },
  {
    id: 3,
    studentName: "Veronica Martinez",
    dateOfBirth: "2002-10-04",
    tuitionPaid: 11300,
    program: "Computer Systems Technician",
    highSchool: "St. James HS",
    courses: ["COMP905", "COMP1100", "CARE10", "GENE66", "GENE12"],
    hasAttendedOrientation: false,
    previousCoursesGrades: {
      COMP101: 95,
      COMP1000: 88,
      GENE102: 68,
      COMM110: 75,
    },
  },
  {
    id: 4,
    studentName: "Jana Mohammed",
    dateOfBirth: "2003-02-16",
    tuitionPaid: 15900,
    program: "Automotive",
    highSchool: "INTERNATIONAL",
    courses: ["AUTO102", "AUTO102", "MATH8", "GENE101", "COMM110"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {},
  },
];

/* 
*2
To access data inside an object, we use the dot notation, or the square brackets notation
*/

const student0 = data[0];
console.log(student0);
console.log(student0.studentName);
console.log(student0["id"]);
const key0 = "tuitionPaid";
console.log(student0[key0]);
const keys = ["highSchool", "program", "dateOfBirth"];
for (let i = 0; i < keys.length; i++) {
  console.log(student0[keys[i]]);
}

/*
*3
To add or change data in an object we call the key and assign a value to it
*/
console.log(student0.highSchool);
student0.highSchool = "Best HS Ever";
console.log(student0.highSchool);
student0["hasAttendedOrientation"] = false;

/*
*4
Deconstruction of an object creating variables with same studentNames of keys with the assigned values 
 */
// let id = student0.id
// let studentName = student0.studentName
// let dateOfBirth = student0.dateOfBirth

// let {id, studentName, dateOfBirth} = student0
// console.log(id)
// console.log(studentName)
// console.log(dateOfBirth)

/*
 *5
Rest operator (...) is used to assign the rest of the data to a new object
 */

let { id, studentName, dateOfBirth, ...restOfStudent } = student0;
console.log(id);
console.log(studentName);
console.log(dateOfBirth);
console.log(restOfStudent);

/**
 *6
 Spread operator (...) to spread keys of an object in a new object
 */

const deepCopy = { ...student0 };
const shallowCopy = student0;
student0.id = 123456;
console.log(shallowCopy.id);
console.log(deepCopy.id);
const { tuitionPaid, ...copyExceptTutionPaid } = student0;
console.log(copyExceptTutionPaid);

deepCopy.previousCoursesGrades.COMM20 = 100;
console.log(deepCopy.previousCoursesGrades.COMM20);
console.log(student0.previousCoursesGrades.COMM20);

/**
 *7
 Template literals is creating strings with JS code embedded like variables or statements
 using back tick (`) operator
 */

console.log(
  `The first student on the list has the name ${student0.studentName}`
);

/**
 *8
 * Arrow function is used to replace the old function declaration. Best used for one liner functions (lambda functions)
 */

//old function declaration method
function oldFunction() {
  console.log("This is an old function");
}
oldFunction();

//arrow function declaration method
const arrowFunction = (num1, num2) => {
  // console.log("This is a arrow function");
  return num1 + num2;
};

console.log(arrowFunction(2, 3));

//Lambda function declaration method
const lambdaFunction = (num1, num2) => num1 + num2;

console.log(lambdaFunction(2, 3));
/**
 *8
 Ternaries are short, one liners, if/else statements 
 */
// student0.tuitionPaid = 7000;
if (student0.tuitionPaid > 10000) {
  console.log("They are paying too much!");
} else {
  console.log("They are paying a reasonable amount");
}

let result =
  student0.tuitionPaid > 10000
    ? "they are paying too much"
    : "they are paying a reasonable amount";
console.log(result);

console.log(student0.courses);

/*if(condition){
  if(another condition){
  }else{
  }   
} else {
  
  }*/

// let tutionRangeChecker =
//   student0.tuitionPaid > 10000
//     ? student0.tuitionPaid < 15000
//       ? "This is in range"
//       : "This is out of range"
//     : "This is too low"; AVIOD

let tuitionRangeChecker =
  student0.tuitionPaid > 10000 && student0.tuitionPaid < 15000
    ? "Tution is in range"
    : "Tution is out of range";

//if they have COMP205 in their courses then we will say they have the correct courseload
//else we need to add COMP205 to their courseload and put a message out saying that we added COMP205

// let courseLoadChecker = (student0.courses).includes("COMP205") ? "They have the correct courseload" :
//   (student0.courses).push("COMP205")
//   console.log("We added COMP205")

console.log(student0.courses);

/**
 *9
 Short circuting with &&, ||, ?? operators
 NOTE: Falsy values are (false, 0 (the number zero), empty string, undefined, NaN, null)
 */

let tuitionChecker = student0.tuitionPaid > 10000 && "They are paying too much";
console.log(tuitionChecker);

console.log(student0.courses.includes("MATH12") || "MATH12 is not required");

console.log(
  student0.previousCoursesGrades.COMM20 === 0 && "They dont have a mark"
);

console.log(
  student0.previousCoursesGrades.COMM20 === null ?? "They don't have a make"
);

//Nullish operator ??
console.log(student0.previousCoursesGrades.COMM20 === 0 ?? "They got a zero");

let thisIsANull;
console.log(thisIsANull ?? "This variable is null");

//and operator work that both values need to be true

//or operator work that one of the values need to be true

//using or operator with a zero value cause issues beacuse zero number is a falsy value

//to solve this issue we use the Nullish coalescing operator

/**
 *10
 Array map: To change all the values of an array at once using a statement
 stored in a new collection (array or object)
 */

const numArray = [2, 3, 5, 7, 9];
const numArrayMulipleBy5 = [];
for (let i = 0; i < numArray.length; i++) {
  numArrayMulipleBy5.push(numArray[i] * 5);
}
console.log(numArrayMulipleBy5);

const numArrayWithMap = numArray.map((num) => num * 5);
console.log(numArrayWithMap);

const dataWithGraduated = data.map((stud) => ({ ...stud, graduated: false }));
console.log(dataWithGraduated);

//to get all students names in a new array

/**
 *11
 Array filter: to filter certian data in regarded to a statement stored in a new collection
 */

const dataWith2002 = data.filter((stud) => stud.dateOfBirth.includes("2002"));
console.log(dataWith2002);

const dataWithTuitionMoreThan12000 = data.filter(
  (stud) => stud.tuitionPaid > 12000
);
console.log(dataWithTuitionMoreThan12000);

//Filter all students born in 2002 using filter and includes method

/**
 *12
 Array reduce: To reduce an array to a single value 
 Ex: display the total of all students tuition paid
 */

const totalTutionPaid = data.reduce(
  (total, stud) => total + stud.tuitionPaid,
  0
);
console.log(totalTutionPaid);

//confirmButton
//confBtn

//the reduce method takes two parameters, the first is a callback function and the second is the initial value.

/**
 *13
 Array sort: to sort arrays ascendingly or descendingly.
 NOTE: This method changes the orginal array. If you want to avoid this, use .slice() method before sorting 
 
 */

const dataSortedByTutionPaid = data.sort(
  (studA, studB) => studB.tuitionPaid - studA.tuitionPaid
);

console.log(dataSortedByTutionPaid);

//sort students by paid tuition

/**
 *14
 Working with immutable arrays
 */

//adding a new student object to the data array using spread (...) operator

const newerStudent = {
  id: 5,
  studentName: "Jane James",
  dateOfBirth: "2003-03-18",
  tuitionPaid: 13600,
  program: "Compter Programming",
  highSchool: "Ottawa High HS",
  courses: ["COMP1011", "COMP1012", "COMP1013", "GENE101", "GENE102"],
  hasAttendedOrientation: false,
  previousCoursesGrades: {
    COMP201: 87,
    COMP205: 78,
    GENE20: 56,
    COMM110: 77,
  },
};

data = [...data, newerStudent];
console.log(data);

//Remove a student object using filter method

data = data.filter((stud) => !stud.studentName.includes("John Doe"));
console.log(data);
//Update a student object using the map method
