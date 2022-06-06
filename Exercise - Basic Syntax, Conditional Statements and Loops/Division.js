function division(number){
    let divs = []
    let checkers = [2, 3, 6, 7, 10]

    for (let i = 0; i <= checkers.length; i++){
        if (number % checkers[i] === 0){
            divs.push(checkers[i])
        }
    }

    if (divs.length > 0) {
        console.log(`The number is divisible by ${Math.max(...divs)}`)
    } else{
        console.log("Not divisible")
    }

}

division(15)