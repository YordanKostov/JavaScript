function sumDigits(number){
    let numbers = number.toString().split('')
    let sum = 0
    for (let num of numbers){
        sum += Number(num)
    }
    console.log(sum)
}

sumDigits(2345678)