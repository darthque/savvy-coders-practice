/*Instructions from your teacher:
In class today, we explored how to create an object literal.

We also learned about template literals. We saw that we can use interpolation to 
dynamically extract the values referenced by variables (HINT: ${}).

Your job is to create an object literal with any key: value of your choice. 
Then use an interpolated template literal to log() out a complete sentence that 
includes the value associated with any property in your object literal - 
don't use any + or concatenation.
*/

//object literal
const boss = {
    "annualsalary" :'six figures' 
};

//template literal
console.log(`My bosses' compensation is ${boss.annualsalary}.`);