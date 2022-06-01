function linear_search(a,y){
    for (var i = 0; i < a.length; i++){
      if (a[i] == y){
        return i
      }
    }
    return -1
  }
  
  
  x = [4,6,8,9,2,7,8,9]
  p = 9
  console.log(linear_search(x,p))