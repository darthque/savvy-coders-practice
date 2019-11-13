function numberSummer (startingValue = 1, endingValue = 10){
    let currentTotal = 0;

    //initializer
    for (let i = startingValue; i <= endingValue; i += 1){
        currentTotal += i; //current total = currenttotal + 1;
    }
    return currentTotal;
}
console.log(numberSummer())