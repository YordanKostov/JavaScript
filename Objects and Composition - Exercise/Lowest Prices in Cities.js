function lowestPricesInCities(data){
    let result = {}
    for (let city of data) {
        let [town, product, price] = city.split(" | ")
        price = Number(price)

        if (!result[product]) {
            result[product] = {}
        }
        result[product][town] = price
    }

    for (let letter in result) {
        const sorted = Object.entries(result[letter]).sort((a, b) => a[1] - b[1])

        console.log(`${letter} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }
}


lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])