const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am' + this.name);
    }
};

// Destructuring
const printName = ({name, age}) => {
    console.log(name, age);
};
printName(person);

const array = ['cooking', 'playing'];
const [val1, val2] = array;
console.log(val1, val2)

// // Spread: Copia o objeto/array em outra constante e não edita o anterior
// const copiedPerson = {...person};
// console.log(copiedPerson);

// const array = ['cooking', 'playing'];
// const newwarray = [...array]
// console.log(newwarray)

// // Rest: Utilizado quando deseja-se mudar a quantidade de argumentos
// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1,2,3,4));
