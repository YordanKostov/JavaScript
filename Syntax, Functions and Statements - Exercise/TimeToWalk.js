function timeToWalk(numOfSteps, footprintInMeters, speedInKmH) {
    let minutes = 0;
    let hours = 0;
    let seconds = 0
    let footprintInKm = footprintInMeters / 1000;
    let kilometersTraveled = numOfSteps * footprintInKm;
    let time = kilometersTraveled / speedInKmH;
    let restMinutes = Math.floor(kilometersTraveled / 0.5)
    minutes = time * 60
    let minutesLeft = minutes % 1
    seconds = minutesLeft * 60
    hours = Math.floor(hours)
    minutes = Math.floor(minutes + restMinutes)
    seconds = Math.round(seconds)

    if (time > 1) {
        hours = Math.floor(time)
    } else{
        hours = 0
    }

    if(minutes < 10){
        minutes = String(minutes)
        if (minutes.length === 1)
            minutes = '0' + minutes
    }
    if(hours < 10){
        hours = String(hours)
        if (hours.length === 1)
            hours = '0' + hours
    }
    if(seconds < 10){
        seconds = String(seconds)
        if (seconds.length === 1)
            seconds = '0' + seconds
    }
    console.log(`${hours}:${minutes}:${seconds}`)
}

timeToWalk(2564, 0.70, 5.5)