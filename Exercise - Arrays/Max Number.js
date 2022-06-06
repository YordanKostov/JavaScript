function maxNumber(array){
    let topNumbers = []

    for (let i = 0; i < array.length; i++){
        let restOfNumbers = []
        for (let j = i + 1; j < array.length; j++){
            restOfNumbers.push(array[j])
        }
        if (Math.max(...restOfNumbers) < array[i]){
            topNumbers.push(array[i])
        }
    }
    console.log(topNumbers.join(' '))
}

maxNumber([1, 4, 3, 2])