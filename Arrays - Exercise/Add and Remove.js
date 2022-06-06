function addAndRemove(commands){
    let arrayOfNums = []
    for(let i = 1; i <= commands.length; i++){
        switch (commands[i-1]){
            case "add":
                arrayOfNums.push(i)
                break;
            case "remove":
                arrayOfNums.pop()
                break;
        }
    }
    if (arrayOfNums.length === 0){
        console.log("Empty")
    }else {
        console.log(arrayOfNums.join("\n"))
    }
}

addAndRemove(["add", "add", "add", "add", "add"])