const parent = {
    name: "John",
    age: 40,
    greet: function() {
        console.log(`Hello, I'm ${this.name}!`);
    }
};


function createChild(ageDiff) {
    const child = Object.create(parent);
    // parent 객체를 프로토타입으로 가지는 새로운 객체 생성
    child.age = parent.age - ageDiff;
    // 부모의 age에서 ageDiff를 빼서 자식의 age 설정
    return child;
}


const child = createChild(5);
    child.greet(); // 결과: "Hello, I'm [자식 이름]!"
    console.log(child.age); // 결과: [자식 나이]