function filterArray() {
    let filteredArray = randomNumberArray.filter(function (el) {
        return el > 10;
    })
    console.log(filteredArray);
}

function randomNumberArr(number) {
    let randomNumberArray = [];
    for (let i = 0; i < number; i++) {
        randomNumberArray[i] = Math.floor(Math.random() * (201)) - 100;
    }
    filterArray(randomNumberArray);
}