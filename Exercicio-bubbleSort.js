let array = [5, 3, 8, 4, 2, 1, 6, 9, 7, 11]

array.map((value, index) => {
     array.map((value2, index2) => {
        if (array[index] <= array[index2]) {
            let aux1 = array[index2]
            let aux2 = array[index]
            
         array[index] = aux1;
         array[index2] = aux2;
        }         
     })
 })


console.log(array)
