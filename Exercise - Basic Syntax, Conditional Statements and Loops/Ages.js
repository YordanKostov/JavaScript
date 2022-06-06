function ages(number){
    switch (true){
        case number >= 0 && number <= 2:
            console.log("baby")
            break
        case number >= 3 && number <= 13:
            console.log("child")
            break
        case number >= 14 && number <= 19:
            console.log("teenager")
            break
        case number >= 20 && number <= 65:
            console.log("adult")
            break
        case number >= 66:
            console.log("elder")
            break
        case number < 0:
            console.log("out of bounds")
    }
}