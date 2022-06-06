function distinctArray(array){
   let newNumbers = []
   for(let i = 0; i < array.length; i++){
    if (!newNumbers.includes(array[i])) {
     newNumbers.push(array[i])
    }
   }
   console.log(newNumbers.join(" "))
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])