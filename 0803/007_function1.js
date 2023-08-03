function add(x, y){
    return x + y
}

add(1, 2)

function sub(x, y){
    return x - y
}

sub(1, 2)

function time(x, y){
    return x * y
}

time(2, 3)

function divide(x, y){
    return x / y
}

divide(4, 2)



function stringToNumber(str) {
    let answer = parseInt(str.replaceAll(',' , ''))
    return answer
}



function addAndMuti(x, y) {
    let add = x + y
    return add*add
}

addAndMuti(3, 4)



function eq(x) {
    return x**2 + 4*x -12
}

eq(2)