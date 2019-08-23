/**
 * функція приймає  два числа та виводить в консоль всі непарні числа
 * у діапазоні між ними
 * @author Taras Petryshak
 * @param {number} start - початок діапазону чисел
 * @param {number} end - кінець діапазону чисел
 */
function range(a, b) {
    if (a < b) {
        while (b - a) {
            if (a % 2) {
                console.log(a);
            }
            a++;
        }
    }
}
range(20, 40);