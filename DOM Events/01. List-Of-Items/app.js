function addItem() {
    let addElementTo = document.getElementById('items')
    let text = document.getElementById('newItemText').value
    let li = document.createElement('li')

    li.textContent = text
    addElementTo.appendChild(li)
}