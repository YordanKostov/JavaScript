function triangleOfNumbers(number){
    for(let i = 1; i <= number; i++){
        console.log(`${i} `.repeat(i))
    }
}

console.log(triangleOfNumbers(10))