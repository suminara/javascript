'use strict';

let login = prompt('Whos there?','')


if (login === 'admin') {
    let password = prompt('password?','')

    if (password === "TheMaster") {
        alert('welcome!!!')
    } else if (password === null || password === '') {
        alert('canceled.')
    } else {
        alert('wrong password.')
    }
} else if (login === null || login === '') {
    alert('canceled.')
} else {
    alert('I dont know you.')
}


