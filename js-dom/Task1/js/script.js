function addForm() {
    let elem = document.getElementById('forms');
    let newElement = elem.cloneNode(true);
    box.append(newElement);
}
function removeForm() {
    box.removeChild(event.currentTarget.closest('#forms'));
}