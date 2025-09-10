const characterNames = ['Gaby', 'Monga', 'Jhonny'];

const [, , Jhonny] = characterNames;

console.log({ Jhonny });

const returnsArrayFn = () => {
  return ['ABC', 123] as const;
};

const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers);

// Tarea

//const useState = ( value:string ) => ([value,  (value:string) => console.log(value)] as const);

const useState = ( value:string ) => {
    return ([value,  (value:string) => console.log(value)] as const);
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta'); 