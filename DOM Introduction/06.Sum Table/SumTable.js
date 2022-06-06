function sumTable() {
    let table = document.querySelectorAll('tr')
    let sum = 0
    for(let i = 1; i < table.length; i++){
        sum += Number(table[i].lastElementChild.textContent)
    }
    console.log(sum)
    document.getElementById('sum').textContent = sum
}