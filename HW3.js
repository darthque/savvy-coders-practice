/*Create an object literal. This object literal could be named 
numberSummerMachine .
numberSummerMachine should have 🔑s for startingNumber and 
endingNumber . numberSummerMachine should have a method - 
perhaps called sumDaNumbers . This method should use the 
current value of its startingNumber and endingNumber and 
it should use looping (either while or for ) to return 
the 'sum of the numbers.' 

Note that `startingNumber` and `endingNumber` can be set as 
whatever values you want, but it's just done 'manually.' 

HINT: You will need to use this inside of the function to 
access the properly scoped 🔑
*/

const numberSummerMachine = {
    startingNumber: 0,
    endingNumber: 0,
    currentTotal:0,
    
    //Method
    sumDaNumber: function(numberSummerMachine.startingNumber, numberSummerMachine.endingNumber){
        //looping to calculate the return
        for (let i = this.startingNumber; i <= this.endingNumber; i+= 1 ){
            this.currentTotal+= i;
        }
        //Functions should have an explicit return
        return this.currentTotal;
    }

};

console.log(numberSummerMachine.sumDaNumber(1,10));