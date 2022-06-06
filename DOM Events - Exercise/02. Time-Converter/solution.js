function attachEventsListeners() {
    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit){
        const inDays = value / ratios[unit]
        return {
            days: inDays,
            hours: inDays * ratios[hours],
            minutes: inDays * ratios[minutes],
            seconds: inDays * ratios[seconds]
        }
    }

    let days = document.getElementById("days")
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    document.getElementById("daysBtn").addEventListener("click", converted)
    document.getElementById("hoursBtn").addEventListener("click", converted)
    document.getElementById("minutesBtn").addEventListener("click", converted)
    document.getElementById("secondsBtn").addEventListener("click", converted)

    function converted(e){
        e.target.parentElement.querySelector('input[type = "text"]')
        const time = convert(Number(input.value))
    }
}