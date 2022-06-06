function train(array) {
    let wagons = array[0].split(' ')
    let maxCapacity = Number(array[1])
    for (let i = 2; i < array.length; i++) {
        if (array[i].length > 1) {
            let currentElement = array[i].split(" ")
            if (currentElement.includes("Add")) {
                wagons.push(currentElement[1])
            }
        } else {
            for (let j = 0; j < wagons.length; j++) {
                 if (Number(wagons[j]) + Number(array[i]) <= maxCapacity) {
                     wagons[j] = Number(wagons[j]) + Number(array[i])
                     console.log(wagons[j])
                    }
                }
            }
        }
        console.log(wagons)
    }
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])