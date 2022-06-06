function commonElements(array1, array2){
    for(let letter of array1){
        if (array2.includes(letter)){
            console.log(letter)
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])