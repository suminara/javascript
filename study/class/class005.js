// Animal" 클래스를 생성하세요. 이 클래스는 "name"이라는 속성을 가지며, "speak"라는 메서드를 가져야 합니다. "speak" 메서드는 해당 동물의 소리를 출력해야 합니다.

// "Dog" 클래스를 "Animal" 클래스로부터 상속받아 생성하세요. "Dog" 클래스는 "breed"라는 추가적인 속성을 가지며, "speak" 메서드를 오버라이드하여 "Woof!"를 출력해야 합니다.

// "Cat" 클래스도 "Animal" 클래스로부터 상속받아 생성하세요. "Cat" 클래스는 "color"라는 추가적인 속성을 가지며, "speak" 메서드를 오버라이드하여 "Meow!"를 출력해야 합니다.

// "Animal", "Dog", "Cat" 클래스의 객체를 각각 하나씩 생성하고, 각 객체의 속성과 "speak" 메서드를 호출하여 결과를 출력하세요.

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log('animal speaks')
    }
    getName(){
        console.log(this.name)
    }
}

class Dog extends Animal {
    constructor(name,breed){
        super(name)
        this.breed = breed;
    }
    speak(){
        console.log('Woof!')
    }
}

class Cat extends Animal {
    constructor(name,color){
        super(name)
        this.color = color;
    }
    speak (){
        console.log('Meow!')
    }

}
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy","Bulldog");
const cat = new Cat("Whiskers","Calico");

console.log(animal.getName()); // 예상 결과: "Generic Animal"
console.log(animal.speak()); // 예상 결과: "Animal speaks"

console.log(dog.getName()); // 예상 결과: "Buddy"
console.log(dog.getBreed()); // 예상 결과: "Bulldog"
console.log(dog.speak()); // 예상 결과: "Woof!"

console.log(cat.getName()); // 예상 결과: "Whiskers"
console.log(cat.getColor()); // 예상 결과: "Calico"
console.log(cat.speak()); // 예상 결과: "Meow!"