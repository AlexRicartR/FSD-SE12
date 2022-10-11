
/// Simplificar tip Aina
// let a = parseInt(document.querySelector("#a").value),
//     b = parseInt(document.querySelector("#b").value);

document.querySelector("#sumar").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
    b = parseInt(document.querySelector("#b").value);
    setTimeout(() => {
        alert('El resultado es ' + (a + b));
    }, 1000)
})
document.querySelector("#resta").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);
    setTimeout(() => {
        alert('El resultado es ' + (a - b));
    }, 1000)
})
document.querySelector("#multiplicacion").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);
    setTimeout(() => {
        alert('El resultado es ' + (a * b));
    }, 1000)
})
document.querySelector("#division").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);
    setTimeout(() => {
        alert('El resultado es ' + (a / b));
    }, 1000)
})
document.querySelector("#elevar").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);
    setTimeout(() => {
        alert('El resultado es ' + MathPow(a, b));
    }, 1000)
})
document.querySelector("#raices").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);
    setTimeout(() => {
        alert('El resultado del primero '+ Math.sqrt(a))
        alert('El resultado del segundo '+ Math.sqrt(b))
    }, 1000)
})
