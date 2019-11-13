const me = {
	age: 3,
    homework: {
        hw1: "passed",
        hw2: "failed",
    },
    //Method
	checkDrinkingAge: function() {
        //Functions should have an explicit return
        return this.age >= 21;
    }
};
	//chaining
	me.homework.hw2 ='passed';
	console.log(me.checkDrinkingAge());