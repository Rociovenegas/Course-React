// molde o cascaron no agrega funcionalidad

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC-123',
    city: 'New York',
  },
};




// //const spiderman = {...ironman};
// // solo rompe el prime rnivel, no las cosas anidadas

// const spiderman = structuredClone(ironman);
// // rompe las referencias

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;


// console.log(ironman, spiderman);