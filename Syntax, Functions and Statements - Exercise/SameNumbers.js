function sameNumbers(num){
    let isSame = true;
    let sumOfDigits = 0;
    let number = num.toString()
    for(let i = 0; i < number.length; i++){
        sumOfDigits += Number(number[i]);
        if (number[0] !== number[i]){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumOfDigits)
}

sameNumbers(222222)