// let time = -5; // 00 y 23
// let greeting;

// if (time >= 00 && time < 12) {
//     greeting = 'Buenos dias!'
// } else if (time >= 12 && time < 20) {
//     greeting = 'Buenas tardes!'
// } else if (time >= 20 && time < 24) {
//     greeting = 'Buenas noches!'
// } else {
//     greeting = 'La hora no es valida'
// }

// console.log(greeting)

// let day = 8;
// let text;

// switch (day) {
//     case 0:
//         text = 'Domingo'
//         break;

//     case 1:
//         text = 'Lunes'
//         break;

//     case 2:
//         text = 'Martes'
//         break;

//     case 3:
//         text = 'Miercoles'
//         break;

//     case 4:
//         text = 'jueves'
//         break;

//     case 5:
//         text = 'Viernes'
//         break;

//     case 6:
//         text = 'Sabado'
//         break;

//     default:
//         text = 'No es un dia valido'
//         break;
// }

// console.log(text)

// let speed = 135;
// let message = speed > 100 ? 'Vas muy rapido' : 'Vas a buena velocidad';

// // if (speed > 100) {
// //     message = 'Vas muy rapido'
// // } else {
// //     message = 'Vas a una buena velocidad'
// // }

// console.log(message)



// if ([1] === '1') console.log('verdadero')
// if (!value) console.log('falso')



// Ciclos
// let veces = 100;

// for (let i = 0; i < veces; i++) {
//     console.log('Hello world', i)
// }

// let i = 0;

// while (i < 200) {
//     console.log('Hello world', i)
//     i++;
// }

// Divisibles entre 2 de 0 a 100
// for(let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// // divisibles entre 3 de 0 a 100
// for(let i = 0; i <= 100; i++) {
//     if (i % 3 === 0) console.log(i)
// }

// // Encontrar los numeros primos de 0 a 100
// for(let counter = 2; counter <= 100; counter++) {
//     let isPrime = true;

//     for(let i = 2; i <= counter; i++){
//         if (counter % i === 0 && i !== counter) isPrime = false;
//     }

//     if (isPrime) console.log(counter)
// }