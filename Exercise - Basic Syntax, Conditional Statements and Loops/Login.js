function login(words){
    let password = words[0].split('').reverse().join('')
    for (let i = 1; i <= words.length; i++){
        if (words[i] === password) {
            console.log(`User ${words[0]} logged in.`)
            break
        } else if (i == 5) {
                console.log(`User ${words[0]} blocked!`)
                break
        } else {
            console.log(`Incorrect password. Try again.`)
        }
    }
}

login(["Acer"])