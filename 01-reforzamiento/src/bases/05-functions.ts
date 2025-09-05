function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string) => `Hola ${name}`;

const message = greet('Gaby');
const message2 = greet2('Jhonny');

console.log(message);
console.log(message2);

interface User {
    uid: string;
    username: string; 
}

function getUser(): User {
  return {
    uid: 'ABC-123',
    username: 'El_Gatito23',
  };
}

const getUser2 = (): User => ({
        uid: 'ABC-123',
        username: 'El_Gatito23',
})

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//   console.log({ value });
// });
// myNumbers.forEach((value) => {
//   console.log(value);
// });
myNumbers.forEach(console.log);
myNumbers.forEach(value => console.log(value));
