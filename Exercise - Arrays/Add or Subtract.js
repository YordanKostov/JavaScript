function addOrSubtract(numbers){
    let sumAfter = 0
    let sumBefore = 0
    let newNumbers = []
    for(let i = 0; i < numbers.length; i++){
        sumBefore += numbers[i]
        if(numbers[i] % 2 === 0){
            newNumbers[i] = numbers[i] + i
            sumAfter += newNumbers[i]
        } else{
            newNumbers[i] = numbers[i] - i
            sumAfter += newNumbers[i]
        }

    }
    console.log(newNumbers)
    console.log(sumBefore)
    console.log(sumAfter)
}

addOrSubtract([5, 15, 23, 56, 35])