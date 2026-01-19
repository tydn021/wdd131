const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

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