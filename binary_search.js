
function binary_search(n,a) {
    var left = 0
    var right = n.length - 1
    var p = Math.floor(n.length/2)
    
    //loop through half of array length times
    for (var i = 0; i < p; i++){
        var x = Math.floor((left + right)/ 2)

        //check if the the index matches 
        if (a == n[x]) {
            return x
        }
        // set the left side to the center
        if (a > n[x]) {
            left = x + 1
        }
        // set the right side to the center
        if (a < n[x]) {
            right = x - 1
        }
    }
    //return a negative number if number not in array
    return -1
}


j = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]


// helps to get user input in node js, 
const ps = require("prompt-sync")
const prompt = ps();

let k = prompt("input factorial number: ")


console.log(binary_search(j,k))
