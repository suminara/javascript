// 두 개의 객체를 합쳐보세요.

const obj1 = {
    a: 1,
    b: 2
};

const obj2 = {
    b: 3,
    c: 4
};

const 합친객체 = Object.assign({}, obj1, obj2)
console.log(합친객체)