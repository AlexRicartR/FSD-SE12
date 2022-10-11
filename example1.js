// /* Dos formas de definir una funcion */

// // Metodo 1
// function operation() {

// }

// // Metodo 2
// const operation = () => {}
// const program = () => {}

// // Time out

// setTimeout(() => {
//     console.log("Ha pasado un segundo");
// }, 1000)
// //Prevalece sobre el anterior console.log al no tener restriccion de tiempo a diferencia del previo console.log
// console.log("Esto es ahora")



// //////////////////////////////////////


// const operation = (onFinish) => {
//     const result = "???????";
//     onFinish ();
// };

// operation (() => {
//     console.log("He acabado");
// });

///////////////////////////////////////

// const anExample = (param1,param2) => {
//     console.log(param1,param2)
// }

// anExample('param1'); 
// anExample('param1', 'param2'); 
// anExample('param1','param2','param3'); 

////////////////////////////////////// EJEMPLO CALLBACK /////////////////////////////////////////////////////

// const anExample = (param1,param2) => {
//     console.log(param1+param2)
// }

// anExample(3, 4); 


// ////////////////////////////////////////////////////////////////

// fetch('https://google.com',(res) => {
//     console.log(res);
// }
// )


////////////////////////////////// EJEMPLO INTERVAL ////////////////////////////////////////////////////////

const timeoutId = setTimeout (() => {}, 1000);
clearTimeout(timeoutId)
setInterval(() => {}, 1000);