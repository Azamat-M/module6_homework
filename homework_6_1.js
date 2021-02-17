console.log('6.1')


function getOddEvenNum(array) {
    let odd, even, zeroInd

    zeroInd = array[0]
    
    let newArr3 = (zeroInd) ? array.slice(1) : array
    
    let newArr3Len = newArr3.length
    
    if(newArr3Len % 2 === 0) {
        odd = even = newArr3Len /2
    } else {
        even = Math.floor(newArr3Len/2)
        odd = even+1
    }
    
    console.log(`Нулевой элемент - ${zeroInd}`)
    console.log(`Кол-во четных - ${even}`)
    console.log(`Кол-во нечетных - ${odd}`)
}

let arr3 = [1,5,5,8,9,41,2,5, null, 'asd']

getOddEvenNum(arr3)