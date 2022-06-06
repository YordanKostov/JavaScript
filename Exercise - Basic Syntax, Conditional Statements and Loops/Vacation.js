function vacation(number, typeOfPerson, day){
    let price = 0
    switch (typeOfPerson){
        case "Students":
            switch (day){
                case "Friday":
                    price = number * 8.45
                    break
                case "Saturday":
                    price = number * 9.80
                    break
                case "Sunday":
                    price = number * 10.46
                    break
            }
            if (number >= 30){
                price -= price * 0.15
            }
            break
        case "Business":
            if (number >= 100){
                number -= 10
            }
            switch (day){
                case "Friday":
                    price = number * 10.90
                    break
                case "Saturday":
                    price = number * 15.60
                    break
                case "Sunday":
                    price = number * 16
                    break
            }
            break
        case "Regular":
            switch (day){
                case "Friday":
                    price = number * 15
                    break
                case "Saturday":
                    price = number * 20
                    break
                case "Sunday":
                    price = number * 22.50
                    break
            }
            if (number >= 10 && number <= 20){
                price -= price * 0.05
            }
            break
        default:
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}

vacation(40, 'Regular', 'Saturday')