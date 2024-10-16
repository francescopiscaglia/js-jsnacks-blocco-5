const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNumber = nums.filter((numb => {
    if (numb % 2 === 0) {
        return true;
    };
    return false;
}));

console.log(evenNumber);


// for loop
let evenArray = [];

for (let i = 0; i < nums.length; i++) {
    const singleNumb = nums[i];

    if (singleNumb % 2 === 0) {
        evenArray.push(singleNumb);
    };
};
console.log(evenArray);