function extract(content) {
    let cont = document.getElementById(content).innerText
    let result = []
    console.log(cont[0])

    for(let i = 0; i < cont.length; i++){
        if (cont[i].includes("(")){
            console.log(cont[i])
            cont[i].replace('(', '')
            cont[i].replace(')', '')
            result.push(cont[i])
        }
    }
    console.log(result)
    console.log(cont)
    return result.join("; ")
}