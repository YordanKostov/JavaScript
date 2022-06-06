class Movie{
    constructor(movieName, ticketPrice) {
        this.movieName = movieName
        this.ticketPrice = Number(ticketPrice)
        this.screenings = []
        this.totalProfit = 0
        this.soldTickets = 0
    }

    newScreening(date, hall, description){
        let screening = {
            date: date,
            hall: hall,
            description: description
        }
        const scr = this.screenings.find(s => s.date == screening.date && s.hall == screening.hall)
        if (scr){
            throw new Error( `Sorry, ${hall} hall is not available on ${date}`)
        } else{
            this.screenings.push(screening)
            return `New screening of ${this.movieName} is added.`
        }
    }

    endScreening(date, hall, soldTickets){

        let screening = {
            date: date,
            hall: hall,
            soldTickets: soldTickets
        }

        const scr = this.screenings.find(s => s.date == screening.date && s.hall == screening.hall)

        let currentProfit = Number(soldTickets) * this.ticketPrice

        if (!scr == true){
            throw new Error (`Sorry, there is no such screening for ${this.movieName} movie.`)
        } else{
            this.totalProfit += currentProfit
            this.soldTickets += Number(soldTickets)
            this.screenings = this.screenings.splice(this.screenings.indexOf(screening), 1)
            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
        }
    }

    toString(){
        let result = `${this.movieName} full information:\nTotal profit: ${(this.totalProfit).toFixed(0)}$\nSold tickets: ${this.soldTickets}\nRemaining film screenings:`
        if (this.screenings){
            this.screenings.sort((a,b) => a.hall.localeCompare(b.hall))
            for(let scr of this.screenings){
                result += `\n${scr.hall} - ${scr.date} - ${scr.description}`
            }
        }else{
            result += `\nNo more screenings!`
        }
        return result
    }

}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());