function storeCatalogue(data){
    data = data.sort();
    let letters = {}
    for (let el of data){
        let [product, price] = el.split(" : ");
        product = String(product)
        price = Number(price);
        if (!letters[product.charAt(0)]){
            letters[product.charAt(0)] = {}
        }
        letters[product.charAt(0)][product] = price
    }

    for (let letter in letters) {
        let key = Object.entries(letters[letter])
        console.log(letter)
        for (let i = 0; i < key.length; i++){
            console.log(`  ${key[i][0]}: ${key[i][1]}`)
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)