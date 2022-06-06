function equalSums(array){

    let elements = []
    for (let i = 1; i < array.length - 1; i++){
        let sumLeft = 0
        let sumRight = 0
        for(let j = i + 1; j < array.length; j++){
            sumRight += array[j]
        }
        for(let j = i - 1; j >= 0; j--){
            sumLeft += array[j]
        }
        if (sumLeft === sumRight){
            elements.push(i)
        }
    }
    if(elements.length > 0){
        console.log(elements.join())
    }else
        console.log('no')
}

equalSums([1, 2, 3, 3])