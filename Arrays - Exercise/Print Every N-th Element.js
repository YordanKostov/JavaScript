function solution(numbers, step){
    let newNums = new Array()
    for(let i = 0; i < numbers.length; i += step) {
        newNums.push(numbers[i])
    }
    return newNums
}

solution(["5", "69", "87", "3", "275", "15","512","1","546"], 2)