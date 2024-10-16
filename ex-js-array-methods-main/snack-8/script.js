const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// let classNumber;

// const specificClass = students.filter(element => {
//   if (element.class === "3C") {
//     classNumber = element.class
//     return true;
//   };
//   return false;
// });
// console.log(classNumber);

const findClass = students.find(element => {
  return element.class === "3C";
});

console.log(findClass.class);


// for loop
let number;

for (let i = 0; i < students.length; i++) {
  const singleStudent = students[i];

  if (singleStudent.class === "3C") {
    number = singleStudent.class;
    break;
  };
};

console.log(number);