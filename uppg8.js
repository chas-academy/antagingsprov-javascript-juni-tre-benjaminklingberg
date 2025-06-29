

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
let personer = [
  { name: "Benjamin", age: 28 },
  { name: "Sven", age: 35 },
  { name: "Noah", age: 42 },
  { name: "Hanna", age: 25 },
  { name: "Sara", age: 31 }
];

function skrivUtPersonerOver30(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].age > 30) {
      console.log(array[i].name);
    }
  }
}
  
skrivUtPersonerOver30(personer);
module.exports = { uppg8 };
