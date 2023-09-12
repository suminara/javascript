// 주어진 코드를 수정하여 도형(Shape) 클래스를 상속받는 여러 하위 클래스를 만들어 보세요. 각 하위 클래스는 도형의 속성을 상속받으면서, 추가로 다음과 같은 메서드들을 구현해야 합니다.

// getArea 메서드: 해당 도형의 넓이를 반환합니다.
// getPerimeter 메서드: 해당 도형의 둘레를 반환합니다.
// 도형의 종류와 각 도형의 속성은 다음과 같습니다:

// 직사각형(Rectangle): 가로(w)와 세로(h) 길이를 가집니다.
// 원(Circle): 반지름(radius)을 가집니다.
// 삼각형(Triangle): 세 변(a, b, c)의 길이를 가집니다.
// 이러한 클래스들을 만들고, 각 클래스의 인스턴스를 생성하여 다음 코드가 동작하도록 수정하세요.

// 클래스 상속을 사용하여 각 도형 클래스를 만듭니다.
// 각 도형 클래스에서 getArea와 getPerimeter 메서드를 구현합니다. 도형마다 넓이와 둘레를 계산하는 방법이 다를 것입니다.

class Shape {
    getArea(){
    }
    getPerimeter(){
    }
}

//사각형

class Rectangle extends Shape {
    constructor (w,h){
        super()
        this.w =w
        this.h =h
    }

    getArea(){
        return this.w * this.h
    }
    getPerimeter(){
        return this.w*2 + this.h*2
    }
}

let rec1 = new Rectangle(10,20)
rec1.getArea() //200
rec1.getPerimeter() //60

//원

class Circle extends Shape {
    constructor (r){
        super()
        this.r =r
    }

    getArea(){
        const r=this.r
        return r*r*Math.PI
    }
    getPerimeter(){
        const r=this.r
        return r*2*Math.PI
    }
}

let cir1 = new Circle(5)
cir1.getArea() //78.53981633974483
cir1.getPerimeter() //31.41592653589793

//삼각형

class Triangle extends Shape {
    constructor(a,b,c){
        super()
        this.a = a
        this.b = b
        this.c = c
    }
    getArea(){
        const a = this.a
        const b = this.b
        const c = this.c
        const s = (a + b + c) / 2
        return Math.sqrt(s * (s - a) * (s - b) * (s - c))
    }
    getPerimeter(){
        return this.a + this.b + this.c
    }
}

let tri1 = new Triangle(2,3,4)
tri1.getArea()//2.9047375096555625
tri1.getPerimeter() //9