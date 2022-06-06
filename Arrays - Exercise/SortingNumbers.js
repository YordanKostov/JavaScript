function sortingNumbers(numbers){
    let sortedNums = []
    numbers.sort()
    console.log(numbers)
    for (let i = 0; i < numbers.length; i++){
        if (i % 2 === 0){
            sortedNums.push(numbers[i])
        } else {
            sortedNums.push(numbers[numbers.length - 1 - i])
        }
    }
    console.log(sortedNums)
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18])