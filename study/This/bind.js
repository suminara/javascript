const teacher = {
    name: "Alice",
    subject: "Math",
};

function introduce() {
    console.log(`Hello! My name is ${this.name} and I teach ${this.subject}.`);
}

// bind와 call 두가지 방법을 이용해 객체 밖에 있는 메서드를 바인딩 해보세요.

introduce.call(teacher) //바인딩 후 실행
introduce.bind(teacher) //바인딩만 해줌