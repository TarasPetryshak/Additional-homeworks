/**
 * функція приймає від користувача два числа та виводить в консоль всі непарні числа
 * у діапазоні між заданими
 * @author Taras Petryshak
 * @param {number} start - початок діапазону чисел
 * @param {number} end - кінець діапазону чисел
 */
function oddNumbers() {
    let start = +prompt('Enter start number');
    let end = +prompt('Enter end number');
    for (let i = start; i < end; i++) {
        if (i % 2) {
            console.log(i);
        }
    }
}