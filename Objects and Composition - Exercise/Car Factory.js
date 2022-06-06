function carFactory(object){
    let car = {}
    car.model = object.model
    switch (true){
        case (object.power <= 90):
            car.engine = {power: 90, volume: 1800}
            break
        case (object.power <= 120):
            car.engine = {power: 120, volume: 2400}
            break
        case (object.power <= 200):
            car.engine = {power: 200, volume: 3500}
            break
    }
    car.carriage = {type: object.carriage, color: object.color}
    if (object.wheelsize % 2 === 0) {
        object.wheelsize -= 1
    }
    car.wheels = [object.wheelsize, object.wheelsize, object.wheelsize, object.wheelsize]
    return car
}

console.log(carFactory({ model: 'VW Golf II',
    power: 100,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }))