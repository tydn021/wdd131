// const DAYS = 6;
// const LIMIT = 39;
// let studentReport = [11, 42, 33, 64, 27, 33, 44]

// for (let i = 0; i < studentReport.length; i++){
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }

// let i = 0;
// while (i < studentReport.length) {
//     if (studentLength[i] < LIMIT) {
//         console.log(studentReport[i])
//     }
//     i++
// }

// studentReport.forEach(function (item) {
//     if (item < LIMIT) {
//         console.log(item)
//     }
// });

// for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }

// let firstName = 'Antonia';
// let lastName = 'Francesca';

// function fullName (first, last){
//     return `${first} ${last}`; 
// }

// const fullName = function (first, last){
//     return `${first} ${last}`; 
// }

// const fullname = (firstName, lastName) => `${firstName}, ${lastName}`;

// document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

function calculate(a, b, callback) {
  callback(a + b);
}

function displayResult(result) {
  console.log('The result is: ' + result);
}

calculate(2, 3, displayResult);