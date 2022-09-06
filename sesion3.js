// function myFunction() {
//     // Codigo que quertemos ejecutar
//     let param1 = 'HEllo world!';
//     let param2 = 2;
//     console.log('Estos son los parametros ', param1, param2);
// }

// myFunction()

// function calculateAge(birthYear) {
//     let age = 2022 - birthYear;
//     return age;
// }

// function yearsUntilRetirement(birthYear, name) {
//     let age = calculateAge(birthYear)
//     let retirement = 65 - age;
//     console.log(name + ' se retira en ' + retirement + ' years.')
// }

// yearsUntilRetirement(1969, 'Jose');

// function power(base, exponent) {
//     let result = 1;

//     for (let i = 0; i < exponent; i++) {
//         // result = result * base;
//         result *= base;
//     }

//     return result;
// }

// console.log(power(2, 3)) // 8
// // power(4, 2) // 16
// // power(5, 3) // 125

// let square = function(number) {
//     return number * number;
// }

// let squareOfFour = square(4);

// console.log(squareOfFour)\

// function whatDoYouDo(job, name) {

// }

// let whatDoYouDo = function(job, name) {
//     switch (job) {
//         case 'developer':
//             return name + ' develops cool apps'

//         case 'designer':
//             return name + ' dsigns awesome sites'

//         default:
//             return name + ' do somehting else'
//     }
// }

// console.log(whatDoYouDo('developer', 'Jose'))
// console.log(whatDoYouDo( 'designer','Maria'))
// console.log(whatDoYouDo('contador','Carlos'))

// function logName() {
//     let name = 'Jose';
//     console.log(name)
// }

// logName()

// (function() {
//     let name = 'Jose'
//     console.log(name)
// })()

// (function(lastName) {
//     let name = 'Jose'
//     console.log(name + ' ' + lastName)
// })('guerrero')

// function getLargerInt(number1, number2) {
//     if (number1 === number2) console.log('Los numeros son iguales')

//     let numeroMayor = number1 > number2
//         ? 'El numero 1 es mayor ' + number1
//         : 'El numero 2 es mayor ' + number2

//     console.log(numeroMayor)
// }

// getLargerInt(4, 8) // 8
// getLargerInt(5, 3) // 5


// function fibonacci(num) {
//     if (num === 0) return 0;

//     if (num === 1) return 1;

//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// function fibonacciSequence(limit) {
//     if (limit < 1) return console.log('limite debe ser mayor que cero')

//     for (let i = 0; i < limit; i++) {
//         console.log(fibonacci(i))
//     }
// }

// fibonacciSequence(8)

// "the quick brown fox"
// "The Quick Brown Fox"

// .split()  // ['the', 'quick', 'brown', 'fox']

// .charAt() // t

// .slice() // uick

// .join() // the quick

function uppercase(phrase) {
    let array1 = phrase.split(' ')
    let newarray = [];

    for(let x = 0; x < array1.length; x++) {

        // console.log(array1[x].charAt(0).toUpperCase())
        newarray.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1))
    }

    return newarray.join(' ');
}

console.log(uppercase('the quick brown fox'))