const numberSummerMachine = {
    startingNumber: 0,
    endingNumber: 10,
    currentTotal:0,
    
    //Method
    sumDaNumber: function(){
        //looping to calculate the return
        for (let i = this.startingNumber; i <= this.endingNumber; i+= 1 ){
            this.currentTotal+= i;
        }
        //Functions should have an explicit return
        return this.currentTotal;
    }

};

console.log(numberSummerMachine.sumDaNumber());