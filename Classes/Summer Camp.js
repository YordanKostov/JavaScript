class SummerCamp{
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {"child": 150, 'student': 300, "collegian": 500}
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money){
        let isValid = true
        for (let [key, value] in Object.entries(this.priceForTheCamp)){
            if(condition === key){
                if(this.priceForTheCamp[condition] > money){
                    isValid = false
                    return `The money is not enough to pay the stay at the camp.`
                }else{
                    isValid = true
                    return
                }
            }else {
                isValid = false
            }
        }

        if (isValid == false){
            throw "Unsuccessful registration at the camp."
        }
        for (let participant in this.listOfParticipants){
            if(participant.name === name){
                isValid = false
                return `The ${name} is already registered at the camp.`
            } else {
                isValid = true
            }
        }
        if (isValid == true){
            this.listOfParticipants({name: name, condition: condition, power: 100, wins: 0})
            return `The ${name} was successfully registered.`
        }

    }

}

let summercamp = new SummerCamp("Me", "Sofia")
console.log(summercamp.registerParticipant("Georgi", "child", 200))
console.log(summercamp.registerParticipant("Georgi", "child", 200))