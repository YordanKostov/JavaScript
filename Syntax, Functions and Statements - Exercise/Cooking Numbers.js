function cookingNumbers(number, action1, action2, action3, action4, action5){
    let enteredActions = new Array();
    let numberAsNumber = Number(number)
    enteredActions.push(action1, action2, action3, action4, action5);
    for (let i = 0; i < enteredActions.length; i++){
        switch (enteredActions[i]){
            case "chop":
                numberAsNumber /= 2;
                console.log(numberAsNumber);
                break;
        }
        switch (enteredActions[i]){
            case "dice":
                numberAsNumber = Math.sqrt(numberAsNumber);
                console.log(numberAsNumber);
                break;
        }
        switch (enteredActions[i]){
            case "spice":
                numberAsNumber += 1;
                console.log(numberAsNumber);
                break;
        }
        switch (enteredActions[i]){
            case "bake":
                numberAsNumber *= 3;
                console.log(numberAsNumber);
                break;
        }
        switch (enteredActions[i]){
            case "fillet":
                numberAsNumber = numberAsNumber - (numberAsNumber * 0.2);
                console.log(numberAsNumber);
                break;
        }
    }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')