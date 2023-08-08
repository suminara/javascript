const loginForm = document.querySelector("#form");
const loginInput = document.querySelector("#input");
const greeting = document.querySelector("#greeting");
const username = loginInput.value;

loginForm.addEventListener('submit', stopRefresh); //submit될때마다 함수 실행
function stopRefresh(event) {
    event.preventDefault();
    greets();
    submitToConsole();
}

function submitToConsole() {
    console.log(loginInput.value);
    loginInput.value =''
}

function greets() {
    const username = loginInput.value;
    document.getElementById('greeting').innerHTML = `hello, ${username}!`;
}


//로컬저장소 저장