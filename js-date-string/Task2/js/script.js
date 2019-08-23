/**
 * 
 * функція повертає кількість знаходжень підрядка в рядку
 * @author  Taras Petryshak
 * @param {string} str - рядок для пошуку у ньому підрядка
 * @param {string} word - шуканий підрядок
 * @returns {number}
 * @example
 * 
 * initial('javascript is not java', 'java');
 * => 2
 * 
 */
function searchString(str, word) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (str.indexOf(word, i) === -1) break;
        i += str.indexOf(word, i) + 1;
        count++;
    }
    return count;
}