function extractText() {
    let items = document.getElementById("items")
    let result = document.getElementById('result')
    for(let i = 0; i < items.children.length; i++){
        result.textContent += `${items.children[i].textContent}\n`
    }
}