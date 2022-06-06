function listOfNames(names){
    names.sort();
    for (let i = 1; i <= names.length; i++){
        console.log(`${i}.${names[i - 1]}`)
    }
}

listOfNames(["John","Bob", "Christina", "Ema"])