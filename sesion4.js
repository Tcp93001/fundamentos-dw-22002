// [ 1, 3, 4 , 7, 2, 1, 9, 0 ]  envia
// [ 2, 6, 8 , 14, 4, 2, 18, 0]  esperamos

// function multiplyByTwo(numbers) {
//     let multipliedNumbers = [];

//     for(let i = 0; i < numbers.length; i++) {
//         multipliedNumbers.push(numbers[i] * 2)
//     }

//     return multipliedNumbers;
// }

// let input = [ 2, 6, 8 , 14, 4, 2, 18, 0];

// // let output = multiplyByTwo(input);

// function calculateAverage(numbers) {
//     let sum = 0;

//     for (let index = 0; index < numbers.length; index++) {
//         sum = sum + numbers[index];
//     }

//     return sum / numbers.length;
// }

// let output = calculateAverage(input);

// console.log(input)
// console.log(output)

// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990
// }

// console.log(john)

// let car = {
//     brand: 'Nissan',
//     brandB: 'super',
//     model: 'Sentra',
//     year: 2008
// }

// car.brand
// car['brand']


// // resultado esperado
// [
//     ['brand', 'Nissan'],
//     ['model', 'Versa'],
//     ['year', 2020]
// ]

// console.log(Object.keys(car)) // keys = ['brand', 'model', 'year']

// function keyValuePairs(car) {
//     let keys = Object.keys(car);
//     let pairs = [];

//     for(let i = 0; i < keys.length; i++) {
//         console.log('indice ', i)
//         console.log('propiedad ', keys[i])
//         console.log('valor propiedad ', car[keys[i]])

//         pairs.push([keys[i], car[keys[i]]])
//     }

//     return pairs;
// }

// let results = keyValuePairs(car);

// console.log(results)

// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1980,
//     calculateAge: function() {
//         let today = new Date();
//         let year = today.getFullYear();

//         this.age = year - this.birthYear;
//     }
// }

// console.log(john)

// john.calculateAge()

// console.log(john)

// var singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];

// function pluck(list, propertyName) {
//     //aqui va el codigo
//     let results = [];

//     for(let i = 0; i < list.length; i++) {
//         results.push(list[i][propertyName])
//     }

//     // list.forEach(element => {
//     //     results.push(element[propertyName])
//     // });

//     // let results = list.map(elem => elem[propertyName]);

//     return results;
// }


console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]