function search() {
    let towns = Array.from(document.querySelectorAll('ul li'))
    let search = document.getElementById("searchText").value
    let result = document.getElementById("result")
    let matches = 0;

    towns.forEach((town) => {
        if (town.innerHTML.includes(search)){
            town.style.fontWeight = 'bold'
            town.style.textDecoration = 'underline'
            matches += 1
        } else {
            town.style.fontWeight = 'normal'
            town.style.textDecoration = ''
        }
    })
    result.textContent = `${matches} matches found`
}
