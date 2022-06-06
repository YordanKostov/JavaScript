function rotateArray(array, timesToRotate){
    let rotatedArray = array
    for(let i = 0; i < timesToRotate; i++){
        rotatedArray.unshift(rotatedArray.pop())
    }
    console.log(rotatedArray.join(" "))
}

rotateArray(["1", "2", "3", "4"], 2)