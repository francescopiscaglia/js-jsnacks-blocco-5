const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const sumNumber = numbers.map(number => {
    return number + 1;
});

console.log(sumNumber);


// for loop
let newArray = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const numberPlusOne = number + 1;
    
    newArray.push(numberPlusOne);
};

console.log(newArray);