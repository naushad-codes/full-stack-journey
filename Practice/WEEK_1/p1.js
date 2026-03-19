//old method of declaring variables
var x = 5;
var x = 10;
function hello(){
    var y = 12;
    if(true){
        console.log(y);
    }
}
console.log(x);
hello();

//Problems:
// 1.Function scoped (not block scoped)
// 2.Can be re-declared
// 3.Causes bugs in loops & async code

let a = 10;

// Features:
// 1.Block scoped
// 2.Can be updated
// 3.Cannot be re-declared

const b =15;

// Features:
// 1.Block scoped
// 2.Cannot be reassigned

