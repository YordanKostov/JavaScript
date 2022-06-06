function addItem() {
    let addElementTo = document.getElementById('items')
    let text = document.getElementById('newItemText').value
    let li = document.createElement('li')
    let button = document.createElement('a')
    button.href = `#`
    button.textContent = '[Delete]'
    button.addEventListener('click', removeElem)

    function removeElem(ev){
        console.log("click")
    }

    li.appendChild(button)
    li.textContent = text
    addElementTo.appendChild(li)
}