const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

names.forEach(element => {
    console.log(element);
})


// for loop
for (let i = 0; i < names.length; i++) {
    const singleName = names[i];
    console.log(singleName);
}