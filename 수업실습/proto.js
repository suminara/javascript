function Factory(){}
let robot = new Factory();

robot instanceof Factory




function NewFactory(name){
    this.name = name;
}

NewFactory.prototype.sayYourName = function(){
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}

let robot1 = new NewFactory('브랜든');

robot1.__proto__ === NewFactory.prototype   //true




// 1. 생성자 함수는 두 가지 매개변수를 전달 받을 수 있으며 전달되는 매개변수에 따라 소시지의 맛이 결정됩니다.
// 2. 소시지 객체는 taste 라는 메서드가 존재합니다. 생성자함수에서 전달받은 재료에 따라 맛을 나타내는 콘솔로그를 출력하는 역할을 합니다. (예시 : ‘소고기’ 와 ‘파’ 를 매개변수로 전달하였을 경우, ‘소고기와 파 맛이 난다!’ 는 콘솔 메세지를 출력합니다.)
// 3. 소시지 클래스를 상속받는 FiresSausage 파생클래스를 생성해봅니다. 파생클래스의 taste 메서드를 실행하면 콘솔 메세지에 불맛이 나기 시작합니다.

class Sausage {
    constructor(재료1, 재료2) {
        this.재료1 = 재료1;
        this.재료2 = 재료2;
    }

    taste () {
        console.log(`${this.재료1}맛과 ${this.재료2}맛이 난다!!!!!!!!!!!`)
    }
}

class FiresSausage extends Sausage {
    taste () {
        this.taste(); //super를 사용할 필요 없음
        console.log(`불맛이 나기 시작한다... 자세히 보니 불에 타버렸다!`)
    }
}

const normalSausage = new Sausage("소고기", "파");
normalSausage.taste();

const fireSausage = new FiresSausage("불고기", "피망");
fireSausage.taste();