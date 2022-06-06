function arrayRotation(array, rotations){
    while(rotations > 0){
        array.push(array.shift())
        rotations -= 1
    }
    console.log(array.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2)