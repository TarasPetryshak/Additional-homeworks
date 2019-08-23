function addForm() {
    let elem = document.getElementsByClassName('inputRow')[0];
    let newElement = elem.cloneNode(true);
    elem.after(newElement);
}
function removeForm() {
    let elem = document.getElementById('forms');
    let elemRemove = document.getElementById('buttonsRow');
    elem.removeChild(elemRemove.previousElementSibling);
}