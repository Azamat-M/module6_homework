console.log('6.3')

function func1(num) {
    return function(num2) {
        return num + num2
    }
}

const newFunc = func1(2)

console.log(newFunc(7))