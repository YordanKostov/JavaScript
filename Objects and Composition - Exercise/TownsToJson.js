function townsToJson(data){
    let result = []
    for (let el of data){
        let [town, latitude, longitude] = el.split(" | ")
        town = town.substring(2)
        longitude = longitude.slice(0, -2)
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)
        if (el !== data[0]){
            let city = {"Town": town, "Latitude": Number(latitude), "Longitude": Number(longitude)}
            result.push(city)
        }
    }
    console.log(JSON.stringify(result))
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])