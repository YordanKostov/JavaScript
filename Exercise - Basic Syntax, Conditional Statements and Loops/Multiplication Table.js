function multiplicationTable(number){
    let times = 1
    while(times <= 10){
        console.log(`${number} X ${times} = ${number * times}`)
        times ++
    }
}
multiplicationTable(5)