function calorieObject(worsd){
    let calObject = {}
    for (let i = 0; i < worsd.length; i++){
        if (i % 2 === 0){
            calObject[worsd[i]] = Number(worsd[i+1])
        }
    }
    console.log(calObject)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52', ])