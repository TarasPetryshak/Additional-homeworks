/**
 * функція запрошує два числа від користувача та перевіряє їх на рівність 
 * 
 * @author Taras Petryshak
 * @param {number} a - введене перше число від користувача
 * @param {number} b - введене друге число від користувача
 * @returns {string}
 * 
 */
function greaterNumber() {
    let a = +prompt('Enter first number');
    let b = +prompt('Enter second number');
    let result = (a === b) ? 'a and b are equal' : (a > b) ? 'a is greater' : 'b is greater';
    return result;
}