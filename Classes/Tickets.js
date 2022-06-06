function solution(array, criteria) {
    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    let ticketCollection = []

    for (let info of array) {
        let splitInfo = info.split('|')
        let ticket = new Ticket(splitInfo[0], splitInfo[1], splitInfo[2])
        ticketCollection.push(ticket)
    }

    if (criteria == "status") {
        ticketCollection.sort((a, b) => {
            return a.status.localeCompare(b.status)
        })
    } else  if (criteria == "destination") {
        ticketCollection.sort((a, b) => {
            return a.destination.localeCompare(b.destination)
        })} else {
        ticketCollection.sort((a, b) => {
            return a.price - b.price
        })
    }
    return ticketCollection
}

console.log(solution(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))