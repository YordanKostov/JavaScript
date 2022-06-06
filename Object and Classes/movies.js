function movies(array){
    let movies = []
    for (let currentCommand of array){
        if(currentCommand.includes("addMovie")){
            let index = currentCommand.split(" ").splice(1,1)
            movies.name = index
        }
    }
    console.log(movies)
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])