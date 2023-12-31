// 아래 코드에서 Rabbit은 Animal을 상속받습니다.

// 그런데 Rabbit 객체를 만들 수가 없습니다. 무엇이 잘못된 것일까요? 코드를 수정해보세요.

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); 
alert(rabbit.name);


// super.name = name
// 클래스의 생성자 내에서 부모 클래스의 생성자를 호출하고 나서 부모 클래스에서 상속 받은 속성을 직접 초기화하려고 할 때 