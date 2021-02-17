console.log('6.2')

function inNumSimple(num) {
    if (num > 1000) return 'данные неверны'

    let flag = `Число ${num} простое`;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = `Число ${num} не является простым`
            break
        }
    }

    return flag
}

console.log(inNumSimple(654))