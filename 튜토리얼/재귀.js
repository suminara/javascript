const 배열 = [1,2,3,4,5]

function sum (배열) {
    if (배열.length === 0) {
        return 0
    }
    return 배열[0] + sum(배열.slice(1));
}

console.log(sum(배열))