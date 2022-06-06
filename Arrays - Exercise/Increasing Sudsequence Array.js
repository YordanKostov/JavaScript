function increasingSudsequence(numbers){
    let subNums = [numbers[0]]
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > subNums[subNums.length - 1]) {
            subNums.push(numbers[i]);
        }
    }
    return subNums
}

increasingSudsequence([1,3,8,4,10,12,3,2,24])