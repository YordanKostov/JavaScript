function houseParty(array){
    let guests = []
    for(let i = 0; i < array.length; i++){
        let guest = array[i].split(' ')
        if(guest.length > 3){
            if (guests.includes(guest[0])){
                let index = guests.indexOf(guest[0])
                guests.splice(index, 1)
            } else {
                console.log(`${guest[0]} is not in the list!`)
            }
        } else {
            if (guests.includes(guest[0])){
                console.log(`${guest[0]} is already in the list!`)
            } else {
                guests.push(guest[0])
            }
        }
    }
    console.log(guests.join("\n"))
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])