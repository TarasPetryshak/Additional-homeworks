/**
 * запрошуємо число від користувача та перевіряємо його на належність
 *  діапазону від 25 до 99 включно поки число не попаде в діапазон або 
 * ввід не буде відмінено користувачем
 * 
 * @author Taras Petryshak
 * @param {number} 
 */

function enterCorrectNumber() {
    do {
        let userNumber = prompt('Enter your number');
        if (+userNumber > 24 && +userNumber < 100 || userNumber == null) {
            break;
        };
    } while (true);
}


function enterCorrectNumber2() {
    for (let i = 1; i > 0;) {
        let userNumber = prompt('Enter your number');
        (+userNumber > 24 && +userNumber < 100 || userNumber == null) ? i = 0 :i++;
        
    }
}
