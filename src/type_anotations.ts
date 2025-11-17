let firstName: string = "Petr";

console.log(firstName);

firstName = "Pavel"; // * Toto je OK, Hodnota Pavel je string
console.log(firstName);

// firstName = 55 // ! Toto je spatne. Protoze to nie je string
// console.log(firstName);   // * Kod spusti i kdyz je to chyba protoze se neprovadi kompilacni kontrola TS
