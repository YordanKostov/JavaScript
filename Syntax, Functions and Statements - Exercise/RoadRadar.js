function roadRadar(speed, area){
    switch (area){
        case "motorway":
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`)
            }
            if (130 < speed && speed <= 150){
                    console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`);
            }
            if (150 < speed && speed <= 170){
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`);
            }
            if (170 < speed){
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless driving`);
            }
            break;
        case "interstate":
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`)
            }
            if (90 < speed && speed <= 110){
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`);
            }
            if (110 < speed && speed <= 130){
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`);
            }
            if (130 < speed){
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless driving`);
            }
            break;
        case "city":
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`)
            }
            if (50 < speed && speed <= 70){
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`);
            }
            if (70 < speed && speed <= 90){
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`);
            }
            if (90 < speed){
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless driving`);
            }
            break;
        case "residential":
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`)
            }
            if (20 < speed && speed <= 40){
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`);
            }
            if (40 < speed && speed <= 60){
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`);
            }
            if (60 < speed){
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless driving`);
            }
            break;
    }
}

roadRadar(40, "city")