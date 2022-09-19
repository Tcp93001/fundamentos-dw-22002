// let numbers = [1, 2, 3, 4, 5];
// let doubles = [];

// for(let i = 0; i < numbers.length; i++) {
// 	doubles.push(numbers[i] * 2);
// }

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// let numbers = [1, 2, 3, 4, 5];
// let doubles = numbers.map(function(elem) {
// 	return elem * 2;
// });

// let copia = numbers.map(function(elem) {return elem;})

// // let copiaFacil = [...numbers]; // Destructuracion

// // let doubles = numbers.map(elem => elem * 2);

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(copia); // [2, 4, 6, 8, 10]

// let car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
// }

// // function addColor(car) {
// //     car.color = 'Black'

// //     return car;
// // }

// function addColor(car) {
//     let newCar = Object.assign({}, car, {
//         color: 'Black'
//     })

//     return newCar;
// }

// console.log('antes de llamar Color ', car)

// let sameCar = addColor(car);

// console.log('despues de llamar a addColor() ', car)
// console.log('despues de llamar a addColor() ', sameCar)

// console.log('Same car? ', car === sameCar) // true

// function add(a, b) {
//     return a + b;
// }

// function random() {
//     return Math.floor(Math.random() * 10);
// }

// function addColor(car) {
//     let newCar = Object.assign({}, car, {
//         color: 'Black'
//     })

//     return newCar;
// }

// No pura
// function addItemToCart(item, quantity) {
//     cart.push(
//         {
//             item: item,
//             quantity: quantity
//         }
//     )
// }

// // Pura
// function addItemToCart(cart, item, quantity) {
//     let newCart = cart.map(elem => elem)

//     newCart.push({
//         item: item,
//         quantity: quantity
//     })

//     return newCart;
// }

// let cart = addItemToCart(cart, 'Phone', 1)

// function addItemToCart(label, usuario) {
//    let newString = label

//    newString.substr(0, 1)
//    newString.concat(usuario)

//    return newString;
// }

// Funciones de primera clase
// let square = function(num) {
//     return num * num;
// }

// let squareOfFour = square(4);

// Funciones de alto order (HOF) (HOC - React)

// // MAP
// let numbers = [1, 2, 3, 4, 5];

// let doubles = numbers.map(function(elem) {
// 	return elem * 2;
// });

// console.log('doubles', doubles);

// // FILTER
// let pares = numbers.filter(function(num) {
//     return num % 2 === 0;
// })

// let valoresImpares = numbers.filter(num => num % 2 !== 0)

// let ultimoValorImpar = valoresImpares[valoresImpares.length - 1]

// console.log('ultimoValorImpar', valoresImpares)

// // REDUCE
// let suma = numbers.reduce(function(acumulador, num) {
//     return acumulador = acumulador + num
// }, 0)

// console.log(suma)

// Input: 12345

//  -- 1 + 2 + 3 + 4 + 5 = 15

// Output: 15

// let number = 12345

// let string = number.toString(); // '12345'

// let array = string.split('');

// let arrayOfNumbers = array.map(function(elem) {
//     return Number(elem)
// })

// let arrayOfNumbers = array.map(Number)

// let suma = arrayOfNumbers.reduce(function(a, b) {
//     return a + b
// }, 0)

// console.log(suma)


// function sumDigits(number){
//     return number
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce(function(a, b) {
//             return a + b
//         }, 0)
// }

// console.log(sumDigits(462781))

// function flatten(arrays) {
//     return arrays.reduce(function(flatten, elem){
//         return flatten.concat(elem)
//     }, [])
// }

// let arrays = [[1, 2, 3], [4, 5], [6]];
// let array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]

// function compact(array) {
//     return array.filter(elem => {
//         return !!elem;
//     })
// }

// let array = [0, 1, false, 2, '', 3];
// let compactedArray = compact(array);

// console.log(compactedArray); // [1, 2, 3]