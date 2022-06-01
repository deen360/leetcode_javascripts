
//nom install prompt-sync

function factorial(x){
    if (x < 0)
        return 0
    if (x==1)
        return 1

    else
        return (x * factorial(x - 1))


}


// helps to get user input in node js, 
const ps = require("prompt-sync")
const prompt = ps();

let y = prompt("input factorial number: ")
console.log(factorial(y))