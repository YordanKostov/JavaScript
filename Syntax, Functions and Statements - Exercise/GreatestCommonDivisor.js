function greatestCommonDivisor(num1, num2){
    let GCD;

    if(num1 > num2){
        let holder = num1;
        num1 = num2;
        num2 = holder;
    }

    for(let i = 1; i <= num2; i++){
        if(num1 % i == 0 && num2 % i == 0){
            GCD = i;
        }
    }
    console.log(GCD);
}

greatestCommonDivisor(2154, 458)