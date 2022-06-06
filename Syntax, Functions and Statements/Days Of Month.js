function daysOfMonth(month, year){
    console.log(new Date(year, month, 0).getDate());
}

daysOfMonth(2, 2021)