class SummerCamp{
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {"child": 150, 'student': 300, "collegian": 500}
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        let keys = Object.keys(this.priceForTheCamp)
        if(!keys.includes(condition)){
            throw new Error("Unsuccessful registration at the camp.")
        }
        for (let participant of this.listOfParticipants){
            if(participant.name === name){
                return `The ${name} is already registered at the camp.`
            }
        }
        if(Number(this.priceForTheCamp[condition]) > Number(money)){
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({name: name, condition: condition, power: 100, wins: 0})
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name){
        for (let participant of this.listOfParticipants){
            if(participant.name === name){
                this.listOfParticipants.splice(this.listOfParticipants.indexOf(participant), 1)
                return `The ${name} removed successfully.`
            }
        }
        throw new Error( `The ${name} is not registered in the camp.`)
    }

    timeToPlay(typeOfGame, ...participants){
        let participant1 = ""
        let participant2 = ""
        if (typeOfGame === "WaterBalloonFights"){
            participant1 = participants[0]
            participant2 = participants[1]
        } else if(typeOfGame === "Battleship"){
            participant1 = participants[0]
        }
        let names = []
        let condition = []
        let power = []
        for (let participant of this.listOfParticipants){
            names.push(participant.name)
            condition.push(participant.condition)
            power.push(participant.power)
        }
        if(participants.length ===  2 && (!names.includes(participant1) || !names.includes(participant2))){
           throw new Error (`Invalid entered name/s.`)
        }
        if (participants.length ===  2 && !(this.listOfParticipants[names.indexOf(participant1)].condition === this.listOfParticipants[names.indexOf(participant2)].condition)){
            throw new Error(`Choose players with equal condition.`)
        }
        if(participants.length === 1 && (!names.includes(participant1))){
            throw new Error (`Invalid entered name/s.`)
        }

        if(typeOfGame == "Battleship"){
            this.listOfParticipants[names.indexOf(participant1)].power += 20
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }else if(typeOfGame == "WaterBalloonFights"){
            if(this.listOfParticipants[names.indexOf(participant1)].power > this.listOfParticipants[names.indexOf(participant2)].power){
                this.listOfParticipants[names.indexOf(participant1)].wins += 1
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (this.listOfParticipants[names.indexOf(participant1)].power < this.listOfParticipants[names.indexOf(participant2)].power){
                this.listOfParticipants[names.indexOf(participant2)].wins += 1
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else{
                return `There is no winner.`
            }
        }
    }

    toString(){
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        let sortedArray = this.listOfParticipants.sort((a,b) => b.wins - a.wins)
        for (let participant of sortedArray){
            result += `\n${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
        }
        return result
    }

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.listOfParticipants[0].condition)
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

