function storeProvision(array1, array2){
    let provision = {}
    for(let i = 0; i < array1.length; i++){
        if (i % 2 === 0){
            provision[array1[i]] = Number(array1[i + 1])
        }
    }
    for (let i = 0; i < array2.length; i++){
        if (i % 2 === 0){
            if(Object.keys(provision).includes(array2[i])){
                provision[array2[i]] += Number(array2[i + 1])
            }else {
                provision[array2[i]] = Number(array2[i + 1])
            }
        }
    }

    for (let [key, value] of Object.entries(provision)){
        console.log(`${key} -> ${value}`)
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
        ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ])