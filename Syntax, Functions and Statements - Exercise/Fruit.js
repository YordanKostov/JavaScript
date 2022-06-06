function fruit(fruit, weightInGram, priceForKilo){
    let weightInKilo = weightInGram / 1000

    console.log(`I need $${(weightInKilo * priceForKilo).toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`)
}

fruit("orange", 2500, 1.80)