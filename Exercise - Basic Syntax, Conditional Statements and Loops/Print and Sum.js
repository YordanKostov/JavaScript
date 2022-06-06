function printAndSum(number1, number2){
    let sum = 0
    let min = Math.min(number1, number2)
    let max = Math.max(number1, number2)
    let numbers = []

    while(min <= max){
        numbers.push(min)
        sum += min
        min++
    }
    console.log(numbers.join(" "))
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)