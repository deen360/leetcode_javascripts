var arr = [10, 20, 30, 50, 70, 12, 15, 2, 10]

//counts the number of elements in array 
var num = arr.length

var mini = function(x, arrays) {
    
    //initialize the first element in the array
    var min = arrays[0]

    //iterates through the array to find minimum value 
    for (var i =0; i <  x; i++)
    {
        if (min > arrays[i])
        min = arrays[i]
    }
    return min
}

console.log(mini(num,arr))