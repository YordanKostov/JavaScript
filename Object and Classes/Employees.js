function employees(array){

    for (let empl of array){
        let employee = {name: empl, personalNum: empl.length}
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])