function squareOfStars(number){
    let result = "";
    for (let row = 0; row < number; row++) {
        result += "* ".repeat(number);
        result += "\n";
    }
    console.log(result)
}

squareOfStars(6)