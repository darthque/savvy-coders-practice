/*this is a body fat checker. the user enters his body fat and gets 
*a printout of the range of body fat he has from obese to very lean

*/

// compares user value to the preset values of bodyfat
if (bodyfat === 3  || <= 9){
    console.log("Your bodyfat is very, very lean. Good Job!");
} else if (bodyfat === 9  || <= 14){
    console.log("Your body fat is lean, but you can do better.");
} else if (bodyfat === 15 || <= 19){
    console.log("Your body fat is average. Not so hot.");
} else if (bodyfat === 19 || <= 22){
    console.log("Your body fat is above average. Time to lose some weight1");
} else if (bodyfat === 23 || <= 27){
    console.log("Your body fat is waaaay to much. You should see a doctor.");
} else  bodyfat >= 28;{
    console.log("I have to be the bearer of bad news, but you need a wakeup call.");
}

function bodyFatChecker (bodyfat){
    let currentTotal = 0;

    //initializer
    for (let i = startingValue; i <= endingValue; i += 1){
        currentTotal += i; //current total = currenttotal + 1;
    }
    return currentTotal;
}
console.log(bodyFatChecker())
bodyfat = prompt("Please enter your body fat percentage:");