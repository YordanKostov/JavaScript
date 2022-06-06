function stringLength(firstWord, secondWord, thirdWord){

    let totalLength = firstWord.length + secondWord.length + thirdWord.length;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

stringLength("chocolate", "ice cream", "cake");