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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

const foundElement = students.find(person => {
  return person.id === 2;
});

console.log(foundElement);


// for loop
let find;

for (let i = 0; i < students.length; i++) {
  const singleStudent = students[i];

  if (singleStudent.id === 2) {
    find = singleStudent;
    break;
  };
};
console.log(find);