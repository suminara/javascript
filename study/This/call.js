const person = {
    name: "John",
    age: 30,
};

function introduce(city) {
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old. I live in ${city}.`);
}

// 위의 함수 introduce를 객체 person의 메서드로 사용하려고 합니다. 그러나 call 메서드를 사용하여 함수를 호출하여야 합니다. call을 이용하여 함수를 호출하고, 객체 person의 정보를 올바르게 출력하는 코드를 작성해보세요.

// person.introduce('seoul')   실행불가

introduce.call(person, 'seoul')