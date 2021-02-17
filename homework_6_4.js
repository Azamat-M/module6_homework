console.log('6.4')

let tempNum
let firstInvoke = true

function concoleLogNums(a, b) {
    if(firstInvoke) tempNum = a

    if(tempNum <= b) {
        console.log(tempNum)
    } else {
        clearInterval(inter)
    }
    tempNum++
    firstInvoke = false
}

const inter = setInterval(concoleLogNums, 1000, 5, 6)