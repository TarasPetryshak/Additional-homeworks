/**
 * функція вираховує кількість днів між двома введеними користувачем у поля 
 * форми датами при натисканні кнопки "Submit"
 * Примітка: при обрахунку різниці дат не враховуються високосні роки
 * @author Taras Petryshak
 * @param {string} - введені користувачем дати в поля форми
 * @returns {string} 
 * 
 * @example
 * 
 * initial('2019-07-01','2019-07-03');
 * => 'Days between dates: 2'
 * 
 */
function daysBetween() {
    const divider = 864e5;
    var temporaryValueFromDate = document.getElementById('fromDate').value;
    var temporaryValueToDate = document.getElementById('toDate').value;
    var dateFromDate = new Date(temporaryValueFromDate);
    var dateToDate = new Date(temporaryValueToDate);
    var a = (dateToDate - dateFromDate) / divider;
    if (a !== a) {
        var day = document.getElementById('result');
        day.innerHTML = 'Enter dates to form';
        day.style.borderColor = 'red';
    } else {
        var day = document.getElementById('result');
        day.innerHTML = 'Days between dates: ' + a;
        day.style.borderColor = 'red';
    }
}