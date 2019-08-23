/**
 * функція повертає масив з унікальних елементів вхідного масиву
 * @author Taras Petrtshak
 * @param {array} arr - вхідний масив
 * @returns {array} uniqueElementsArray
 * @example 
 * 
 * initial getUniqueElementsArray([1,2,1,3]);
 * => [1,2,3]
 * 
 * @see https://lodash.com/docs/4.17.14#uniq
 * 
 */


function getUniqueElementsArray(arr) {
    let uniqueElementsArray = _.uniq(arr);
    return uniqueElementsArray;
}

let arr = [1, 2, 1, 4, 1, 3];
/* function getUniqueElementsArray_2(arr) {
    let uniqueElementsArray = _.uniqWith(arr, _.isEqual);;
    return uniqueElementsArray;
} */