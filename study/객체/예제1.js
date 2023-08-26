var people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Michael", age: 40 },
    ];
    
    // 1-1. 배열 내 모든 객체의 이름을 추출하여 새로운 배열 생성
    
    // 1-2. 배열 내 객체 중 나이 30세 이상의 조건을 만족하는 객체를 추출
    
    
    const arr1 = people.map(obj => obj.name)
    console.log(arr1)

    const arr2 = people.filter(obj => obj.age >=30)
    console.log(arr2)