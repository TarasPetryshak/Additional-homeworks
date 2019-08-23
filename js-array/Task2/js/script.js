let loremString = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quo sed, aperiam maxime cupiditate labore. Repellendus nulla voluptatibus assumenda laborum?'
function sortString(str) {
    let temporaryArray = loremString.split(' ');
    temporaryArray.sort(function (a, b) {
        return a.length - b.length
    });
    let formattedLoremString = temporaryArray.join(' ');
    console.log(formattedLoremString);
}
sortString(loremString);