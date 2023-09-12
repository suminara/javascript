function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function() {
      console.log(`Driving the ${this.year} ${this.make} ${this.model}`);
    };
  }
  
  const myCar = new Car('Toyota', 'Camry', 2022);
  myCar.drive(); // 출력: "Driving the 2022 Toyota Camry"
  

  //위의 함수를 클래스문법으로 써보세요.

class Car {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive (){
    console.log(`Driving the ${this.year} ${this.make} ${this.model}`);
  }
}

const myCar = new Car('Toyota', 'Camry', 2022);
myCar.drive();